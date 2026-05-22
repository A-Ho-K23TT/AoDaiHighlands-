import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
const Navbar = () => {

  const[visible, setvisible] = useState(false);

  const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems, language, setLanguage, t} = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login')
    setToken('')
    setCartItems({})
  }

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      <Link to='/' ><img src={assets.logo} className='w-36' alt="" /></Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
          
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>{t('nav.home')}</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
          
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>{t('nav.collection')}</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>
          
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>{t('nav.about')}</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>
          
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>{t('nav.contact')}</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        
          </ul>
        

        <div className='flex items-center gap-6'>
            <div className='hidden sm:flex items-center gap-1 rounded-full border border-gray-300 bg-white p-1 text-xs font-medium text-gray-600'>
              <button
                type='button'
                onClick={() => setLanguage('en')}
                className={`rounded-full px-3 py-1 transition-colors ${language === 'en' ? 'bg-black text-white' : 'hover:text-black'}`}
              >
                EN
              </button>
              <button
                type='button'
                onClick={() => setLanguage('vi')}
                className={`rounded-full px-3 py-1 transition-colors ${language === 'vi' ? 'bg-black text-white' : 'hover:text-black'}`}
              >
                VI
              </button>
            </div>
            <img onClick={() => setShowSearch(true)}  src={assets.search_icon} className='w-5 cursor-pointer'  alt='' />

            <div className='group relative' >
              <img onClick={() => token ? null : navigate('/login')} src={assets.profile_icon} alt="" className='w-5 cursor-pointer' />
                {/* DROP DOWN */}
                {token && 
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4' >
                  <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'>{t('nav.myProfile')}</p>
                    <p onClick={() => navigate('/orders')}  className='cursor-pointer hover:text-black' >{t('nav.orders')} </p>
                    <p onClick={logout} className='cursor-pointer hover:text-black' >{t('nav.logout')}</p>
                  </div>
                </div>}
            </div>

            <Link to='/cart' className="relative">
               <img src={assets.cart_icon}  className='w-5 min-w-5' alt=""  />
               <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            
            <img  onClick={() => setvisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />

          </div>
      
         {/* Sidebar  menu for small screen  */}
         <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0' } `} >
            <div className='flex flex-col text-gray-600'>
              <div onClick={() => setvisible(false)}  className='flex items-center gap-4 p-3 cursor-pointer'>
                <img src={assets.dropdown_icon} alt="" className='h-4 rotate-180'/>
                <p>{t('nav.back')}</p>
              </div>
              
              <div className='flex items-center gap-2 px-6 py-3 border-b text-xs font-medium text-gray-600'>
                <button type='button' onClick={() => setLanguage('en')} className={`${language === 'en' ? 'font-semibold text-black' : ''}`}>EN</button>
                <span>/</span>
                <button type='button' onClick={() => setLanguage('vi')} className={`${language === 'vi' ? 'font-semibold text-black' : ''}`}>VI</button>
              </div>
              <NavLink  onClick={() => setvisible(false)}  className='py-2 pl-6 border' to='/'>{t('nav.home')}</NavLink>
              <NavLink  onClick={() => setvisible(false)}  className='py-2 pl-6 border' to='/collection'>{t('nav.collection')}</NavLink>
              <NavLink  onClick={() => setvisible(false)}  className='py-2 pl-6 border' to='/about'>{t('nav.about')}</NavLink>
              <NavLink  onClick={() => setvisible(false)}  className='py-2 pl-6 border' to='/contact'>{t('nav.contact')}</NavLink>
            </div>
          </div>
        </div>
  )
}

export default Navbar
