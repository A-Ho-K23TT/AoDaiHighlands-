import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, formatCurrency } from '../App'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import { AdminLanguageContext } from '../context/AdminLanguageContext'

const List = ({token}) => {
  
  const [list,setList] = useState([])
  const { t } = useContext(AdminLanguageContext)
  
  const fetchList = async () => {
    try {
      
    const response = await axios.get(backendUrl + '/api/product/list')
    if (response.data.success) {
      setList(response.data.products);
    }
    else {
      toast.error(response.data.message)
    }
    
    } catch (error) {
      console.log(error)
      toast.error(error.message);
    }
  }

  const removeproduct = async (id) => {
    try {
      
    const response = await axios.post(backendUrl + '/api/product/remove', {id}, {headers:{token}})
    if(response.data.success){
      toast.success(response.data.message)
      await fetchList();
    }
    else {
     toast.error(response.data.message)
    }

    } catch (error) {
      console.log(error)
      toast.error(error.message);
    }
  } 

  useEffect(() => {
    fetchList()
  },[])
  
  
  return (
    <>
      <p className='mb-2' >{t('list.title')}</p>
      <div className='flex flex-col gap-2'>

        {/* --------------- List Table Title ----------------- */}
      <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm ' >
        <b>{t('list.image')}</b>
        <b>{t('list.name')}</b>
        <b>{t('list.category')}</b>
        <b>{t('list.price')}</b>
        <b className='text-center'>{t('list.action')}</b>
      </div>

      {/* -------------- Product List --------------- */}
      {
        list.map((item,index) => (
          <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm ' key={index}>
            <img className='w-12' src={item.image[0]} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{formatCurrency(item.price)}</p>
              <p onClick={() => removeproduct(item._id)} className='text-right md:text-center cursor-pointer text-lg ' >X</p>
          </div>
        ))
      }
    
      </div>
    </>
  )
}

export default List
