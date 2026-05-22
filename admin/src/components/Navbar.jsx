import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { AdminLanguageContext } from '../context/AdminLanguageContext'



const Navbar = ({setToken}) => {
  const { language, setLanguage, t } = useContext(AdminLanguageContext)
  return (
    <div className='flex items-center py-2 px-[4%] justify-between' >
      <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
      <div className='flex items-center gap-3'>
        <div className='flex items-center gap-1 rounded-full border border-gray-300 bg-white p-1 text-xs font-medium text-gray-600'>
          <button type='button' onClick={() => setLanguage('en')} className={`${language === 'en' ? 'bg-black text-white' : ''} rounded-full px-3 py-1`}>EN</button>
          <button type='button' onClick={() => setLanguage('vi')} className={`${language === 'vi' ? 'bg-black text-white' : ''} rounded-full px-3 py-1`}>VI</button>
        </div>
        <button onClick={() => setToken('') } className='bg-gray-600  text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm' >{t('navbar.logout')}</button>
      </div>
    </div>
  )
}

export default Navbar
