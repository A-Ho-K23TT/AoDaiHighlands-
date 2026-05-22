import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import pendingStripeOrderModel from "../models/pendingStripeOrderModel.js";
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173'
const vndPerUsd = Number(process.env.VND_PER_USD || 25000)

const convertVndToUsdCents = (amount) => Math.max(1, Math.round((Number(amount || 0) / vndPerUsd) * 100))

// Placing orders using COD Method

const placeOrder = async (req,res) => {
  try {
  const{ userId, items, amount, address, paymentMethod, shippingFee, pendingId, success, session_id } = req.body;

   if (req.body.verifyStripe) {
    if (success === false || success === 'false') {
      if (pendingId) {
        await pendingStripeOrderModel.findByIdAndDelete(pendingId)
      }
      return res.json({ success: false, message: 'Payment canceled' })
    }

    const pendingOrder = pendingId
      ? await pendingStripeOrderModel.findById(pendingId)
      : await pendingStripeOrderModel.findOne({ sessionId: session_id })

    if (!pendingOrder) {
      return res.json({ success: false, message: 'Pending order not found' })
    }

    const existingOrder = await orderModel.findOne({ paymentMethod: 'Stripe', date: pendingOrder.date, userId: pendingOrder.userId })

    if (existingOrder) {
      await pendingStripeOrderModel.deleteOne({ _id: pendingOrder._id })
      return res.json({ success: true, message: 'Order already verified' })
    }

    const session = await stripe.checkout.sessions.retrieve(session_id)

    if (session.payment_status === 'paid') {
      await orderModel.create({
        userId: pendingOrder.userId,
        items: pendingOrder.items,
        address: pendingOrder.address,
        amount: pendingOrder.amount,
        paymentMethod: pendingOrder.paymentMethod,
        payment: true,
        shippingFee: pendingOrder.shippingFee,
        date: pendingOrder.date
      })
      await pendingStripeOrderModel.deleteOne({ _id: pendingOrder._id })
      await userModel.findByIdAndUpdate(userId, { cartData: {} })
      return res.json({ success: true, message: 'Payment verified' })
    }

    await pendingStripeOrderModel.deleteOne({ _id: pendingOrder._id })
    return res.json({ success: false, message: 'Payment was not completed' })
   }

   if (paymentMethod === 'Stripe') {
    const pendingOrderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: 'Stripe',
      shippingFee: Number(shippingFee || 0),
      date: Date.now()
    }

    const pendingOrder = await pendingStripeOrderModel.create(pendingOrderData)
    const totalUsdCents = convertVndToUsdCents(amount)

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        ...items.map((item) => ({
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.name,
              images: item.image && item.image.length ? [item.image[0]] : []
            },
            unit_amount: convertVndToUsdCents(Number(item.price) * Number(item.quantity))
          },
          quantity: 1
        })),
        ...(Number(shippingFee || 0) > 0 ? [{
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Shipping fee'
            },
            unit_amount: convertVndToUsdCents(shippingFee)
          },
          quantity: 1
        }] : [])
      ],
      success_url: `${frontendUrl}/verify?success=true&pendingId=${pendingOrder._id}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontendUrl}/verify?success=false&pendingId=${pendingOrder._id}`,
      client_reference_id: pendingOrder._id.toString(),
      metadata: {
        pendingId: pendingOrder._id.toString(),
        userId,
        shippingFee: String(shippingFee || 0),
        totalUsdCents: String(totalUsdCents)
      }
    })

    await pendingStripeOrderModel.findByIdAndUpdate(pendingOrder._id, { sessionId: session.id })

    return res.json({ success: true, session_url: session.url, pendingId: pendingOrder._id })
   }

   const orderData = {
    userId,
    items,
    address,
    amount,
    paymentMethod: 'Cash On Delivery',
    payment: false,
    shippingFee: Number(shippingFee || 0),
    date: Date.now()
   }
    const newOrder = new orderModel(orderData)
    await newOrder.save()

    await userModel.findByIdAndUpdate(userId, {cartData:{}})
    res.json({success: true, message: 'Order Placed'})

  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
  }

}


// All Orders data for Admin panel

const allOrders = async (req,res) => {
  try {     
    const orders = await orderModel.find({})
    res.json({success: true, orders})

  } catch (error) {
      console.log(error)
      res.json({success:false, message:error.message})
  }
}



// User Order Data for Frontend
const userOrders = async (req,res) => {
  try {
    const { userId } = req.body
    const orders = await orderModel.find({ userId })
    res.json({success: true, orders})
  } catch (error) {
      console.log(error)
      res.json({success:false, message:error.message})
  }
}



// update order status from Admin Panel
const updateStatus = async (req, res) => {
  try{
    const {orderId, status} = req.body
    const updateData = { status }

    if (status === 'Delivered') {
      updateData.payment = true
    }

    await orderModel.findByIdAndUpdate(orderId, updateData)
    res.json({success: true, message: "Order Status Updated"})
  } catch (error){
    console.log(error)
    res.json({success:false, message:error.message})
  }
}


export {placeOrder, allOrders, userOrders, updateStatus}