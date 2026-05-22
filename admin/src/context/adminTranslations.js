export const defaultAdminLanguage = 'en';

export const adminTranslations = {
  en: {
    app: {
      title: 'Admin panel',
      logout: 'Logout',
    },
    navbar: {
      logout: 'Logout',
      language: 'Language',
    },
    sidebar: {
      addItems: 'Add Items',
      listItems: 'List Items',
      orders: 'Orders',
    },
    login: {
      title: 'Admin panel',
      email: 'Email Address',
      password: 'Password',
      login: 'Login',
    },
    add: {
      uploadImage: 'Upload Image',
      productName: 'Product name',
      productDescription: 'Product description',
      productCategory: 'Product category',
      subCategory: 'Sub category',
      targetAudience: 'Target audience',
      productPrice: 'Product Price',
      productSizes: 'Product Sizes',
      bestseller: 'Add to Bestseller',
      submit: 'ADD',
      typeHere: 'Type here',
      writeContentHere: 'Write content here',
    },
    list: {
      title: 'All products List',
      image: 'Image',
      name: 'Name',
      category: 'Category',
      price: 'Price',
      action: 'Action',
      remove: 'Remove',
    },
    orders: {
      title: 'Order page',
      items: 'Items',
      method: 'Method',
      payment: 'Payment',
      done: 'Done',
      pending: 'Pending',
      date: 'Date',
      statusOptions: {
        orderPlaced: 'Order Placed',
        packing: 'Packing',
        shipped: 'Shipped',
        outForDelivery: 'Out for delivery',
        delivered: 'Delivered',
      },
    },
  },
  vi: {
    app: {
      title: 'Trang quản trị',
      logout: 'Đăng xuất',
    },
    navbar: {
      logout: 'Đăng xuất',
      language: 'Ngôn ngữ',
    },
    sidebar: {
      addItems: 'Thêm sản phẩm',
      listItems: 'Danh sách sản phẩm',
      orders: 'Đơn hàng',
    },
    login: {
      title: 'Trang quản trị',
      email: 'Địa chỉ email',
      password: 'Mật khẩu',
      login: 'Đăng nhập',
    },
    add: {
      uploadImage: 'Tải ảnh lên',
      productName: 'Tên sản phẩm',
      productDescription: 'Mô tả sản phẩm',
      productCategory: 'Danh mục sản phẩm',
      subCategory: 'Danh mục phụ',
      targetAudience: 'Đối tượng sử dụng',
      productPrice: 'Giá sản phẩm',
      productSizes: 'Kích cỡ',
      bestseller: 'Thêm vào bán chạy',
      submit: 'THÊM',
      typeHere: 'Nhập tại đây',
      writeContentHere: 'Nhập nội dung tại đây',
    },
    list: {
      title: 'Danh sách sản phẩm',
      image: 'Ảnh',
      name: 'Tên',
      category: 'Danh mục',
      price: 'Giá',
      action: 'Thao tác',
      remove: 'Xóa',
    },
    orders: {
      title: 'Trang đơn hàng',
      items: 'Sản phẩm',
      method: 'Phương thức',
      payment: 'Thanh toán',
      done: 'Đã thanh toán',
      pending: 'Chờ thanh toán',
      date: 'Ngày',
      statusOptions: {
        orderPlaced: 'Đã đặt hàng',
        packing: 'Đang đóng gói',
        shipped: 'Đã gửi hàng',
        outForDelivery: 'Đang giao hàng',
        delivered: 'Đã giao',
      },
    },
  },
};

export const translateAdmin = (language, key) => {
  const activeLanguage = adminTranslations[language] ? language : defaultAdminLanguage;
  const segments = key.split('.');
  let current = adminTranslations[activeLanguage];

  for (const segment of segments) {
    if (current && Object.prototype.hasOwnProperty.call(current, segment)) {
      current = current[segment];
    } else {
      return key;
    }
  }

  return typeof current === 'string' ? current : key;
};
