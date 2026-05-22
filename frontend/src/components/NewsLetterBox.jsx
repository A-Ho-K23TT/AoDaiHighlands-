import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const NewsLetterBox = () => {
    const { t } = useContext(ShopContext)

    const onSubmitHandler = (event) => {
    event.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>{t('newsletter.title')}</p>
      <p className='text-gray-400 mt-3'>{t('newsletter.description')}</p>   
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none'  type='email' placeholder={t('newsletter.placeholder')} required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>{t('newsletter.button')}</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
