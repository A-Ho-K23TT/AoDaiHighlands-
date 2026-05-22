import mongoose from 'mongoose'

const pendingStripeOrderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: { type: Array, required: true },
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    shippingFee: { type: Number, required: false, default: 0 },
    paymentMethod: { type: String, required: true, default: 'Stripe' },
    sessionId: { type: String, required: false, default: '' },
    date: { type: Number, required: true }
})

const pendingStripeOrderModel = mongoose.models.pendingStripeOrder || mongoose.model('pendingStripeOrder', pendingStripeOrderSchema)

export default pendingStripeOrderModel