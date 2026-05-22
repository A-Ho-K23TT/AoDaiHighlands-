// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';
// const Collection = () => {
  

//   const {products, search, showSearch } = useContext(ShopContext);
//   const [showFilter, setShowFilter] = useState(false);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [SubCategory, setSubCategory] = useState([]);
//   const [sortType, setSortType] = useState('relavent');

//   const toggleCategory = (e) => {

//     if (category.includes(e.target.value)){
      
//       setCategory(prev => prev.filter(item => item !== e.target.value));
//     }
//     else{
//       setCategory(prev => [...prev, e.target.value]);

//     }
  
//   }

//   const toggleSubCategory = (e) => {
  
//     if(SubCategory.includes(e.target.value)){
//       setSubCategory(prev => prev.filter(item => item !== e.target.value));
//     }
//     else{
//       setSubCategory(prev => [...prev,e.target.value]);
//     }
//   }

//   const applyFilter = () => {
//     let productsCopy = products.slice();

//     if(showSearch && search){
//       productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
//     }

//     if(category.length > 0){
//       productsCopy =  productsCopy.filter(item => category.includes(item.category));
//     }

//     if(SubCategory.length > 0){
//       productsCopy =  productsCopy.filter(item => SubCategory.includes(item.subcategory));
//     }

//     setFilterProducts(productsCopy);
//   }


//   const sortProducts = () => {
//      let fpCopy = filterProducts.slice();

//      switch (sortType) {
//       case 'low-high':
//         setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price)));
//         break;

//         case 'high-low':
//           setFilterProducts(fpCopy.sort((a,b) => (b.price -a.price)));
//           break;

//         default:
//           applyFilter();
//           break; 

//      }
//   }


//   useEffect(() => {
//     setFilterProducts(products);
//   },[])

//   useEffect(() => {
//        applyFilter();
//   },[category, SubCategory,search, showSearch,products])


//   useEffect(() => {
//     sortProducts();
//   },[sortType])

//   return (
//     <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t' >
        
//       {/* filter Options */}
//       <div className='min-w-60'>
//          <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
//           <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
//          </p>

//          {/* Category Filter */}

//          <div className={`border border-gray-300  pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
//            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
//            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <p className='flex gap-2'>
//               <input className='w-3'  type='checkbox'  value={"Men"} onChange={toggleCategory} />Men
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3'  type='checkbox'  value={"Women"} onChange={toggleCategory} />Women
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3'  type='checkbox'  value={"Kids"} onChange={toggleCategory} />Kids
//             </p>
//            </div>
//          </div>

//         {/* Sub Category Filter */}
//         <div className={`border border-gray-300  pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
//            <p className='mb-3 text-sm font-medium'>TYPE</p>
//            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <p className='flex gap-2'>
//               <input className='w-3'  type='checkbox'  value={"Topwear"} onChange={toggleSubCategory} />Topwear
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3'  type='checkbox'  value={"Bottomwear"} onChange={toggleSubCategory} />Bottomwear
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3'  type='checkbox'  value={"Winterwear"} onChange={toggleSubCategory} />Winterwear
//             </p>
//            </div>
//          </div>


//       </div>

//       {/* Right Side */}
//       <div className='flex-1' >
//         <div className='flex justify-between text-base sm:text-2xl mb-4'>
//           <Title text1={'ALL'} text2={'COLLECTION'} />
           
//            {/* Product Sort */}

//            <select onChange={(e) => setSortType(e.target.value)}  className='border-2 border-gray-300 text-sm px-2'>
//             <option value='relavent' >Sort by: Relavent</option>
//             <option value='low-high' >Sort by: Low to High</option>
//             <option value='high-low' >Sort by: High to Low</option>
//            </select>
//         </div>

//         {/* Map Products */}
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
//            {
//             filterProducts.map((item, index) => (
//               <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
//             ))
//            }  
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Collection



import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const audienceOptions = [
  { value: 'Nữ', labelKey: 'collection.audienceFemale' },
  { value: 'Nam', labelKey: 'collection.audienceMale' },
  { value: 'Trẻ em', labelKey: 'collection.audienceKids' },
  { value: 'Unisex', labelKey: 'collection.audienceUnisex' },
];

const categoryOptions = [
  { value: 'ÁO DÀI VIỆT NAM', labelKey: 'collection.categoryAoDai' },
  { value: 'ÁO THỔ CẨM ĐỒNG BÀO', labelKey: 'collection.categoryBrocade' },
  { value: 'ĐỒ CƯỚI & THỜI TRANG PHỐI THỔ CẨM', labelKey: 'collection.categoryWeddingFusion' },
  { value: 'LỤA & PHỤ KIỆN THỜI TRANG CAO CẤP', labelKey: 'collection.categoryPremiumSilk' },
  { value: 'THỦ CÔNG MỸ NGHỆ & QUÀ TẶNG', labelKey: 'collection.categoryHandicraft' },
];

const subCategorySections = [
  {
    titleKey: 'collection.subAoDaiSection',
    options: [
      { value: 'Áo Dài Cưới & Ăn Hỏi', labelKey: 'collection.subAoDaiWedding' },
      { value: 'Áo Dài Truyền Thống', labelKey: 'collection.subAoDaiTraditional' },
      { value: 'Áo Dài Cách Tân', labelKey: 'collection.subAoDaiModern' },
      { value: 'Áo Dài Học Sinh', labelKey: 'collection.subAoDaiStudent' },
      { value: 'Áo Dài Theo Đối Tượng', labelKey: 'collection.subAoDaiTargeted' },
    ],
  },
  {
    titleKey: 'collection.subBrocadeSection',
    options: [
      { value: 'Thổ Cẩm Vùng Tây Bắc', labelKey: 'collection.subNorthwestBrocade' },
      { value: 'Thổ Cẩm Vùng Tây Nguyên', labelKey: 'collection.subCentralHighlandsBrocade' },
      { value: 'Thổ Cẩm Chăm & Nam Bộ', labelKey: 'collection.subChamSouthBrocade' },
      { value: 'Phụ Kiện Thổ Cẩm', labelKey: 'collection.subBrocadeAccessories' },
    ],
  },
  {
    titleKey: 'collection.subFusionSection',
    options: [
      { value: 'Áo Dài Phối Thổ Cẩm', labelKey: 'collection.subAoDaiFusion' },
      { value: 'Váy Cưới Thổ Cẩm', labelKey: 'collection.subBrocadeWeddingDress' },
      { value: 'Thời Trang Ứng Dụng', labelKey: 'collection.subLifestyleFashion' },
    ],
  },
  {
    titleKey: 'collection.subSilkSection',
    options: [
      { value: 'Khăn Choàng Lụa', labelKey: 'collection.subSilkScarf' },
      { value: 'Vải Lụa May Đo', labelKey: 'collection.subTailoredSilk' },
      { value: 'Trang Sức & Cài Áo', labelKey: 'collection.subJewelryAccessories' },
      { value: 'Nón Lá Việt Nam', labelKey: 'collection.subConicalHat' },
    ],
  },
  {
    titleKey: 'collection.subGiftSection',
    options: [
      { value: 'Gốm Sứ Bát Tràng', labelKey: 'collection.subBatTrangCeramic' },
      { value: 'Nghệ Thuật Sơn Mài', labelKey: 'collection.subLacquerArt' },
      { value: 'Mây Tre Đan', labelKey: 'collection.subRattanBamboo' },
      { value: 'Quà Lưu Niệm', labelKey: 'collection.subSouvenir' },
    ],
  },
];

const Collection = () => {
  const { products, search, showSearch, t } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [SubCategory, setSubCategory] = useState([]);
  const [targetAudience, setTargetAudience] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (value) => {
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    );
  };

  const toggleSubCategory = (value) => {
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    );
  };

  const toggleTargetAudience = (value) => {
    setTargetAudience((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    );
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    if (SubCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => SubCategory.includes(item.subcategory));
    }

    if (targetAudience.length > 0) {
      productsCopy = productsCopy.filter((item) => targetAudience.includes(item.targetAudience));
    }

    setFilterProducts(productsCopy);
  };

  const sortProducts = () => {
    const fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, SubCategory, targetAudience, search, showSearch, products]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          {t('collection.filters')}
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt='' />
        </p>

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>{t('collection.audience')}</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {audienceOptions.map((option) => (
              <p key={option.value} className='flex gap-2'>
                <input className='w-3 cursor-pointer' type='checkbox' value={option.value} onChange={() => toggleTargetAudience(option.value)} />
                {t(option.labelKey)}
              </p>
            ))}
          </div>
        </div>

        <div className={`border border-gray-300 pl-5 py-3 mt-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>{t('collection.categories')}</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {categoryOptions.map((option) => (
              <p key={option.value} className='flex gap-2'>
                <input className='w-3 cursor-pointer' type='checkbox' value={option.value} onChange={() => toggleCategory(option.value)} />
                {t(option.labelKey)}
              </p>
            ))}
          </div>
        </div>

        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>{t('collection.subcategories')}</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700 h-64 overflow-y-auto pr-2 scrollbar-thin'>
            {subCategorySections.map((section) => (
              <div key={section.titleKey} className='mb-1'>
                <span className='font-semibold text-gray-900 mt-1 block border-b pb-0.5'>{t(section.titleKey)}:</span>
                {section.options.map((option) => (
                  <p key={option.value} className='flex gap-2'>
                    <input className='w-3 cursor-pointer' type='checkbox' value={option.value} onChange={() => toggleSubCategory(option.value)} />
                    {t(option.labelKey)}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={t('collection.title1')} text2={t('collection.title2')} />

          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2 cursor-pointer h-10'>
            <option value='relavent'>{t('collection.sortRelevant')}</option>
            <option value='low-high'>{t('collection.sortLowHigh')}</option>
            <option value='high-low'>{t('collection.sortHighLow')}</option>
          </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          ) : (
            <p className='col-span-full text-center text-gray-500 py-10'>{t('collection.emptyState')}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection
