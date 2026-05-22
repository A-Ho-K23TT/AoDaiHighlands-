import React from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()
  const { t } = useContext(ShopContext)

  const handleNavigation = (path) => {
    navigate(path)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} alt="" className='mb-5 w-32'/>
            <p className='w-full md:w-2/3 text-gray-600'>
              {t('footer.description')}
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>{t('footer.company')}</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li 
                  onClick={() => handleNavigation('/')} 
                  className='cursor-pointer hover:text-black transition-colors'
                >
                  {t('footer.home')}
                </li>
                <li 
                  onClick={() => handleNavigation('/about')} 
                  className='cursor-pointer hover:text-black transition-colors'
                >
                  {t('footer.about')}
                </li>
                <li 
                  onClick={() => handleNavigation('/contact')} 
                  className='cursor-pointer hover:text-black transition-colors'
                >
                  {t('footer.contact')}
                </li>
                <li className='cursor-pointer hover:text-black transition-colors'>
                  {t('footer.privacy')}
                </li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>{t('footer.getInTouch')}</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>{t('footer.phone')}: 0333.067.862</li>
                <li>{t('footer.email')}: ahho.k23tt@kontum.udn.vn</li>
            </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          {t('footer.copyright')}
        </p>    
      </div> 

    </div>
  )
}

export default Footer
