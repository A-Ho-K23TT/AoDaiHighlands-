import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets'

const OurPolicy = () => {
  const { t } = useContext(ShopContext)

  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm  md:text-base text-gray-700 ' >
      
      <div>
        <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>{t('policy.exchangeTitle')}</p>
        <p className='text-gray-400'>{t('policy.exchangeDescription')}</p>
      </div>

      <div>
        <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>{t('policy.returnTitle')}</p>
        <p className='text-gray-400'>{t('policy.returnDescription')}</p>
      </div>
      
      <div>
        <img src={assets.support_img} alt="" className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>{t('policy.supportTitle')}</p>
        <p className='text-gray-400'>{t('policy.supportDescription')}</p>
      </div>
    
    </div>
  )
}

export default OurPolicy
