import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {

  const {delivery_fee, getCartAmount, t, formatCurrency} = useContext(ShopContext);
  
    return (
    <div className='w-full' >
      <div className='text-2xl'>
        <Title text1={t('cartTotal.title1')} text2={t('cartTotal.title2')} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>{t('cartTotal.subtotal')}</p>
          <p>{formatCurrency(getCartAmount())}</p>
        </div>
        
        <hr />
        <div className='flex justify-between'>
          <p>{t('cartTotal.shippingFee')}</p>
          <p>{formatCurrency(delivery_fee)}</p>
        </div>
        <hr />
        
        <div className='flex justify-between'>
          <p>{t('cartTotal.total')}</p>
          <b>{formatCurrency(getCartAmount()  === 0 ? 0 : getCartAmount() + delivery_fee)}</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
