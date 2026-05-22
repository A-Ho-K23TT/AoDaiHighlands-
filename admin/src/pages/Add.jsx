
import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios' 
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { AdminLanguageContext } from '../context/AdminLanguageContext'

// 1. ĐỊNH NGHĨA DỮ LIỆU DANH MỤC THEO ĐÚNG HỆ THỐNG
const CATEGORY_DATA = {
  "ÁO DÀI VIỆT NAM": [
    "Áo Dài Cưới & Ăn Hỏi",
    "Áo Dài Truyền Thống",
    "Áo Dài Cách Tân",
    "Áo Dài Học Sinh",
  ],
  "ÁO THỔ CẨM ĐỒNG BÀO": [
    "Thổ Cẩm Vùng Tây Bắc",
    "Thổ Cẩm Vùng Tây Nguyên",
    "Thổ Cẩm Chăm & Nam Bộ",
    "Phụ Kiện Thổ Cẩm",
  ],
  "ĐỒ CƯỚI & THỜI TRANG PHỐI THỔ CẨM": [
    "Áo Dài Phối Thổ Cẩm",
    "Váy Cưới Thổ Cẩm",
    "Thời Trang Ứng Dụng",
  ],
  "LỤA & PHỤ KIỆN THỜI TRANG CAO CẤP": [
    "Khăn Choàng Lụa",
    "Vải Lụa May Đo",
    "Trang Sức & Cài Áo",
    "Nón Lá Việt Nam",
  ],
  "THỦ CÔNG MỸ NGHỆ & QUÀ TẶNG": [
    "Gốm Sứ Bát Tràng",
    "Nghệ Thuật Sơn Mài",
    "Mây Tre Đan",
    "Quà Lưu Niệm",
  ],
};

const TARGET_AUDIENCE_LABELS = {
  en: {
    "Nữ": "Women",
    "Nam": "Men",
    "Trẻ em": "Kids",
    "Unisex": "Unisex",
  },
  vi: {
    "Nữ": "Nữ",
    "Nam": "Nam",
    "Trẻ em": "Trẻ em",
    "Unisex": "Unisex",
  },
};

const CATEGORY_LABELS = {
  en: {
    "ÁO DÀI VIỆT NAM": "Vietnamese Ao Dai",
    "ÁO THỔ CẨM ĐỒNG BÀO": "Ethnic Brocade Wear",
    "ĐỒ CƯỚI & THỜI TRANG PHỐI THỔ CẨM": "Wedding & Brocade Fusion",
    "LỤA & PHỤ KIỆN THỜI TRANG CAO CẤP": "Premium Silk & Accessories",
    "THỦ CÔNG MỸ NGHỆ & QUÀ TẶNG": "Handicrafts & Gifts",
  },
  vi: {
    "ÁO DÀI VIỆT NAM": "Áo dài Việt Nam",
    "ÁO THỔ CẨM ĐỒNG BÀO": "Áo thổ cẩm đồng bào",
    "ĐỒ CƯỚI & THỜI TRANG PHỐI THỔ CẨM": "Đồ cưới & thời trang phối thổ cẩm",
    "LỤA & PHỤ KIỆN THỜI TRANG CAO CẤP": "Lụa & phụ kiện thời trang cao cấp",
    "THỦ CÔNG MỸ NGHỆ & QUÀ TẶNG": "Thủ công mỹ nghệ & quà tặng",
  },
};

const SUBCATEGORY_LABELS = {
  en: {
    "Áo Dài Cưới & Ăn Hỏi": "Wedding Ao Dai",
    "Áo Dài Truyền Thống": "Traditional Ao Dai",
    "Áo Dài Cách Tân": "Modern Ao Dai",
    "Áo Dài Học Sinh": "Student Ao Dai",
    "Thổ Cẩm Vùng Tây Bắc": "Northwest Brocade",
    "Thổ Cẩm Vùng Tây Nguyên": "Central Highlands Brocade",
    "Thổ Cẩm Chăm & Nam Bộ": "Cham & Southern Brocade",
    "Phụ Kiện Thổ Cẩm": "Brocade Accessories",
    "Áo Dài Phối Thổ Cẩm": "Ao Dai with Brocade",
    "Váy Cưới Thổ Cẩm": "Brocade Wedding Dress",
    "Thời Trang Ứng Dụng": "Lifestyle Fashion",
    "Khăn Choàng Lụa": "Silk Scarf",
    "Vải Lụa May Đo": "Tailored Silk Fabric",
    "Trang Sức & Cài Áo": "Jewelry & Brooches",
    "Nón Lá Việt Nam": "Vietnamese Conical Hat",
    "Gốm Sứ Bát Tràng": "Bat Trang Ceramics",
    "Nghệ Thuật Sơn Mài": "Lacquer Art",
    "Mây Tre Đan": "Rattan & Bamboo",
    "Quà Lưu Niệm": "Souvenirs",
  },
  vi: {
    "Áo Dài Cưới & Ăn Hỏi": "Áo dài cưới & ăn hỏi",
    "Áo Dài Truyền Thống": "Áo dài truyền thống",
    "Áo Dài Cách Tân": "Áo dài cách tân",
    "Áo Dài Học Sinh": "Áo dài học sinh",
    "Thổ Cẩm Vùng Tây Bắc": "Thổ cẩm vùng Tây Bắc",
    "Thổ Cẩm Vùng Tây Nguyên": "Thổ cẩm vùng Tây Nguyên",
    "Thổ Cẩm Chăm & Nam Bộ": "Thổ cẩm Chăm & Nam Bộ",
    "Phụ Kiện Thổ Cẩm": "Phụ kiện thổ cẩm",
    "Áo Dài Phối Thổ Cẩm": "Áo dài phối thổ cẩm",
    "Váy Cưới Thổ Cẩm": "Váy cưới thổ cẩm",
    "Thời Trang Ứng Dụng": "Thời trang ứng dụng",
    "Khăn Choàng Lụa": "Khăn choàng lụa",
    "Vải Lụa May Đo": "Vải lụa may đo",
    "Trang Sức & Cài Áo": "Trang sức & cài áo",
    "Nón Lá Việt Nam": "Nón lá Việt Nam",
    "Gốm Sứ Bát Tràng": "Gốm sứ Bát Tràng",
    "Nghệ Thuật Sơn Mài": "Nghệ thuật sơn mài",
    "Mây Tre Đan": "Mây tre đan",
    "Quà Lưu Niệm": "Quà lưu niệm",
  },
};

const Add = ({token}) => {
 const { t, language } = useContext(AdminLanguageContext)

 const [image1,setImage1] = useState(false)
 const [image2,setImage2] = useState(false)
 const [image3,setImage3] = useState(false)
 const [image4,setImage4] = useState(false)

 const [name, setName] = useState('');
 const [description, setDescription] = useState('');
 const [price, setPrice] = useState('');
 
 // CẬP NHẬT GIÁ TRỊ MẶC ĐỊNH THEO DANH MỤC ĐẦU TIÊN CỦA BẠN
 const [category, setCategory] = useState('ÁO DÀI VIỆT NAM');
 const [subCategory, setSubCategory] = useState('Áo Dài Cưới & Ăn Hỏi');
 const [targetAudience, setTargetAudience] = useState('Nữ'); 
 const [bestseller, setBestseller] = useState(false);
 const [sizes, setSizes] = useState([]);

 // HÀM ĐỔI DANH MỤC CHÍNH SẼ TỰ ĐỘNG ĐỔI LUÔN DANH MỤC PHỤ PHÙ HỢP
 const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSubCategory(CATEGORY_DATA[selectedCategory][0]); // Lấy phần tử sub-category đầu tiên làm mặc định
 }

 const onsubmitHandler = async (e) => {
   e.preventDefault();

   try {
    
   const formData = new FormData()

   formData.append("name",name)
   formData.append("description",description)
   formData.append("price",price)
   formData.append("category",category)
   formData.append("subcategory",subCategory)
   formData.append("targetAudience",targetAudience) 
   formData.append("bestseller",bestseller)
   formData.append("sizes",JSON.stringify(sizes))

  image1 && formData.append("image1",image1)
  image2 && formData.append("image2",image2)
  image3 && formData.append("image3",image3)
  image4 && formData.append("image4",image4)

  const response = await axios.post(backendUrl + '/api/product/add', formData, {headers:{token}})

  if(response.data.success) {
    toast.success(response.data.message)
    setName('')
    setDescription('')
    setImage1(false)
    setImage2(false)
    setImage3(false)
    setImage4(false)
    setPrice('')
    setSizes([]) 
    setBestseller(false) 
  } else {
    toast.error(response.data.message)
  }
  
   } catch (error) {
    console.log(error);
    toast.error(error.message)
   }
 }

  return (
    <form onSubmit={onsubmitHandler}  className='flex flex-col w-full items-start gap-3' >
      
    <div>
      <p className='mb-2'>{t('add.uploadImage')}</p>

      <div className='flex gap-2' >
        <label htmlFor="image1">
          <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
          <input onChange={(e) =>setImage1(e.target.files[0]) }  type="file"  id="image1" hidden />
        </label>
        <label htmlFor="image2">
          <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
          <input onChange={(e) =>setImage2(e.target.files[0]) } type="file"  id="image2" hidden />
        </label>
        <label htmlFor="image3">
          <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
          <input onChange={(e) =>setImage3(e.target.files[0]) } type="file"  id="image3" hidden />
        </label>
        <label htmlFor="image4">
          <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
          <input onChange={(e) =>setImage4(e.target.files[0]) } type="file"  id="image4" hidden />
        </label>
      </div>
    </div>

    <div className='w-full' >
      <p className='mb-2' >{t('add.productName')}</p>
      <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2 border border-slate-300 rounded' type="text" placeholder={t('add.typeHere')} required />
    </div>

    <div className='w-full' >
      <p className='mb-2' >{t('add.productDescription')}</p>
      <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2 border border-slate-300 rounded' type="text" placeholder={t('add.writeContentHere')} required />
    </div>

    <div className='flex flex-col sm:flex-row gap-4 w-full max-w-[800px]'>

      <div className='flex-1'>
        <p className='mb-2' >{t('add.productCategory')}</p>
        {/* SỬA ĐỔI: Map mảng danh mục chính từ khối dữ liệu gốc */}
        <select value={category} onChange={handleCategoryChange} className='w-full px-3 py-2 border border-slate-300 rounded'>
          {Object.keys(CATEGORY_DATA).map((cat) => (
            <option key={cat} value={cat}>{CATEGORY_LABELS[language]?.[cat] || cat}</option>
          ))}
        </select>
      </div>

      <div className='flex-1'>
        <p className='mb-2' >{t('add.subCategory')}</p>
        {/* SỬA ĐỔI: Chỉ hiện danh mục phụ tương ứng với danh mục chính đang chọn */}
        <select value={subCategory} onChange={(e) => setSubCategory(e.target.value)}  className='w-full px-3 py-2 border border-slate-300 rounded' >
          {CATEGORY_DATA[category].map((sub) => (
            <option key={sub} value={sub}>{SUBCATEGORY_LABELS[language]?.[sub] || sub}</option>
          ))}
        </select>
      </div>

      <div>
        <p className='mb-2' >{t('add.targetAudience')}</p>
        <select value={targetAudience} onChange={(e) => setTargetAudience(e.target.value)} className='w-full px-3 py-2 border border-slate-300 rounded'>
          {Object.keys(TARGET_AUDIENCE_LABELS.vi).map((value) => (
            <option key={value} value={value}>{TARGET_AUDIENCE_LABELS[language]?.[value] || value}</option>
          ))}
        </select>
      </div>

      <div>
        <p className='mb-2' >{t('add.productPrice')}</p>
        <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 border border-slate-300 rounded sm:w-[120px]'  type='Number' placeholder='250000' required />
      </div>

    </div>

    <div>
      <p className='mb-2' >{t('add.productSizes')}</p>
      <div className='flex gap-3' >
        <div onClick={() => setSizes(prev => prev.includes('S') ? prev.filter(item => item !== 'S') : [...prev, 'S'] )}>
          <p className={`${sizes.includes('S') ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`} >S</p>
        </div>

        <div onClick={() => setSizes(prev => prev.includes('M') ? prev.filter(item => item !== 'M') : [...prev, 'M'] )} >
          <p className={`${sizes.includes('M') ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`} >M</p>
        </div>
        
        <div onClick={() => setSizes(prev => prev.includes('L') ? prev.filter(item => item !== 'L') : [...prev, 'L'])} >
          <p className={`${sizes.includes('L') ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`} >L</p>
        </div>        

        <div onClick={() => setSizes(prev => prev.includes('XL') ? prev.filter(item => item !== 'XL') : [...prev, 'XL'] )} >
          <p className={`${sizes.includes('XL') ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`} >XL</p>
        </div>

        <div onClick={() => setSizes(prev => prev.includes('XXL') ? prev.filter(item => item !== 'XXL') : [...prev, 'XXL'])} >
          <p className={`${sizes.includes('XXL') ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>XXL</p>
        </div>
      </div>
    </div>

    <div className='flex gap-2'>
      <input onChange={() => setBestseller(prev => !prev  )} checked={bestseller} type="checkbox" name="" id="bestseller" />
      <label className='cursor-pointer' htmlFor="bestseller">{t('add.bestseller')}</label>
    </div>

    <button type='submit' className='w-28 py-3 mt-4 bg-black text-white cursor-pointer'>{t('add.submit')}</button>
    </form>
  )
}

export default Add
