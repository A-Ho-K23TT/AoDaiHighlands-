import React, { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ShopContext } from '../context/ShopContext'

const Verify = () => {
  const [searchParams] = useSearchParams()
  const success = searchParams.get('success')
  const pendingId = searchParams.get('pendingId')
  const sessionId = searchParams.get('session_id')
  const { backendUrl, token, setCartItems, navigate } = useContext(ShopContext)

  useEffect(() => {
    const verifyPayment = async () => {
      if (!token) {
        toast.error('Please login first')
        navigate('/login')
        return
      }

      try {
        const response = await axios.post(
          backendUrl + '/api/order/place',
          { pendingId, success, session_id: sessionId, verifyStripe: true },
          { headers: { token } },
        )

        if (response.data.success) {
          setCartItems({})
          toast.success('Payment successful')
          navigate('/orders')
        } else {
          toast.error(response.data.message || 'Payment failed')
          navigate('/cart')
        }
      } catch (error) {
        toast.error(error?.response?.data?.message || error.message)
        navigate('/cart')
      }
    }

    verifyPayment()
  }, [backendUrl, navigate, pendingId, sessionId, setCartItems, success, token])

  return (
    <div className='flex min-h-[60vh] items-center justify-center pt-16'>
      <div className='rounded border border-gray-200 px-8 py-6 text-center text-gray-700 shadow-sm'>
        <p className='text-lg font-medium'>Verifying payment...</p>
        <p className='mt-2 text-sm text-gray-400'>Please do not close this page.</p>
      </div>
    </div>
  )
}

export default Verify