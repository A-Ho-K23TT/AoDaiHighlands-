import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {

  const {delivery_fee, getCartAmount, t, formatCurrency, convertVndToUsd, formatUsdCurrency} = useContext(ShopContext);
  const subtotalVnd = getCartAmount();
  const totalVnd = subtotalVnd === 0 ? 0 : subtotalVnd + delivery_fee;
  const subtotalUsd = convertVndToUsd(subtotalVnd);
  const shippingUsd = convertVndToUsd(delivery_fee);
  const totalUsd = convertVndToUsd(totalVnd);
  
    return (
    <div className='w-full' >
      <div className='text-2xl'>
        <Title text1={t('cartTotal.title1')} text2={t('cartTotal.title2')} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>{t('cartTotal.subtotal')}</p>
          <div className='flex gap-2 text-right'>
            <div className='min-w-24 rounded border border-gray-200 px-2 py-1'>
              <p className='text-[10px] text-gray-400'>VND</p>
              <p>{formatCurrency(subtotalVnd)}</p>
            </div>
            <div className='min-w-24 rounded border border-gray-200 px-2 py-1'>
              <p className='text-[10px] text-gray-400'>USD</p>
              <p>{formatUsdCurrency(subtotalUsd)}</p>
            </div>
          </div>
        </div>
        
        <hr />
        <div className='flex justify-between'>
          <p>{t('cartTotal.shippingFee')}</p>
          <div className='flex gap-2 text-right'>
            <div className='min-w-24 rounded border border-gray-200 px-2 py-1'>
              <p className='text-[10px] text-gray-400'>VND</p>
              <p>{formatCurrency(delivery_fee)}</p>
            </div>
            <div className='min-w-24 rounded border border-gray-200 px-2 py-1'>
              <p className='text-[10px] text-gray-400'>USD</p>
              <p>{formatUsdCurrency(shippingUsd)}</p>
            </div>
          </div>
        </div>
        <hr />
        
        <div className='flex justify-between'>
          <p>{t('cartTotal.total')}</p>
          <div className='flex gap-2 text-right'>
            <div className='min-w-24 rounded border border-gray-300 bg-gray-50 px-2 py-1'>
              <p className='text-[10px] text-gray-500'>VND</p>
              <b>{formatCurrency(totalVnd)}</b>
            </div>
            <div className='min-w-24 rounded border border-gray-300 bg-gray-50 px-2 py-1'>
              <p className='text-[10px] text-gray-500'>USD</p>
              <b>{formatUsdCurrency(totalUsd)}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
