import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Contact = () => {
  const { t } = useContext(ShopContext)

  return (
    <div>

      <div className='text-center text-2xl  pt-10 border-t'>
        <Title text1={t('contact.title1')} text2={t('contact.title2')} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28' >
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600 ' >{t('contact.store')}</p>
          <p className='text-gray-500 whitespace-pre-line'>{t('contact.storeAddress')}</p>
          <p className='text-gray-500 whitespace-pre-line'>{t('contact.storeContact')}</p>
          <p className='font-semibold text-xl text-gray-600'>{t('contact.customerSupport')}</p>
          <p className='text-gray-500'>
            {t('contact.supportBody')}
          </p>
          <p className='text-gray-500'>
            <b>{t('contact.workingHours')}:</b> {t('contact.workingHoursValue')}
          </p>
        </div>
      </div>
      
       <NewsLetterBox />

    </div>
  )
}

export default Contact
