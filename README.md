# 🛒 Forever - Full Stack MERN E-commerce Clothing Store

<div align="center">

![AoDaiHighlands E-commerce](https://img.shields.io/badge/Forever-E--commerce-black?style=for-the-badge&logo=shopify&logoColor=white)

A modern **full-stack e-commerce clothing website** built with **React**, **Node.js**, **Express**, **MongoDB**, and **Tailwind CSS**. Complete **online shopping platform** with user authentication, shopping cart, product filtering, and admin dashboard.

[![Live Demo](https://img.shields.io/badge/🔗_Live_Demo-Visit_Site-success?style=for-the-badge)]()

</div>

---

## 🔥 Keywords

> MERN Stack E-commerce | React Shopping Cart | Node.js E-commerce | Online Clothing Store | Full Stack Web Application | MongoDB E-commerce | React Tailwind E-commerce | JavaScript Shopping Website | Responsive E-commerce | Admin Dashboard | Product Management

---

## ✨ Features

### 🛍️ Customer Features
- 🔐 **User Authentication** - Secure Login & Registration
- 🛒 **Shopping Cart** - Add, Remove, Update Items
- ❤️ **Wishlist** - Save Favorite Products
- 🔍 **Smart Search** - Find Products Instantly
- 🏷️ **Category Filter** - Men, Women, Kids
- 👕 **Type Filter** - Topwear, Bottomwear, Winterwear
- 💰 **Price Sorting** - Low to High, High to Low
- 📦 **Order Placement** - Easy Checkout Process
- 📜 **Order History** - Track All Orders
- 💵 **Cash on Delivery** - Convenient Payment Option
- 📱 **Fully Responsive** - Mobile, Tablet, Desktop
- 🔔 **Toast Notifications** - Real-time Feedback
- 📧 **Newsletter Subscription** - Stay Updated

### 👨‍💼 Admin Features
- 📊 **Admin Dashboard** - Complete Control Panel
- ➕ **Add Products** - Upload New Items with Images
- 📋 **Product List** - View & Manage All Products
- 📦 **Order Management** - Track & Update Orders
- 🖼️ **Cloudinary Integration** - Cloud Image Storage

---

## 🛠️ Tech Stack

<div align="center">

| Frontend | Backend | Database | Styling | Tools |
|:--------:|:-------:|:--------:|:-------:|:-----:|
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) | ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white) |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) | ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) | ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white) | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white) |

</div>

---


## 📸 Screenshots

### 🏠 Homepage
![Homepage](./screenshots/homepage.PNG)

### 🛍️ Product Collection
![Collection](./screenshots/collection.png)

### 📄 Product Details
![Product Details](./screenshots/product-details.PNG)

### 🛒 Shopping Cart
![Cart](./screenshots/cart.PNG)

### 👤 User Login
![Login](./screenshots/login.PNG)

### 📦 Place Order
![Place Order](./screenshots/place-order.PNG)

### ➕ Add Product (Admin)
![Add Product](./screenshots/addproduct.PNG)

### 📝 Product List (Admin)
![Product List](./screenshots/listitem.PNG)

### 📋 Orders Page (Admin)
![Orders](./screenshots/orders.PNG)

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Cloudinary Account

### 1. Clone the Repository

```bash
git clone link repo nay
cd AoDaiHighlands

```
 
### 2. Install Dependencies

```bash
# Install Frontend Dependencies
cd frontend
npm install

# Install Backend Dependencies
cd ../backend
npm install

# Install Admin Dependencies
cd ../admin
npm install

```

### 3. Environment Variables
Create .env file in backend folder:

```bash
env

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

ADMIN_EMAIL=admin@gmail.com
ADMIN_PASSWORD=admin123

# Stripe (thanh toán)
STRIPE_SECRET_KEY="cua ban"
```

Create .env file in frontend folder:
```bash
env

VITE_BACKEND_URL=http://localhost:5000
```

### 4. Run the Application
```Bash

# Run Backend
cd backend
npm run dev

# Run Frontend (new terminal)
cd frontend
npm run dev

# Run Admin (new terminal)
cd admin
npm run dev
```

### 5. Open in Browser

```text
Frontend: http://localhost:5173
Admin:    http://localhost:5174
Backend:  http://localhost:5000
```

### 📁 Folder Structure

```text

AoDaiHighlands/
│
├── 📂 frontend/
│   ├── 📂 src/
│   │   ├── 📂 assets/
│   │   ├── 📂 components/
│   │   │   ├── BestSeller.jsx
│   │   │   ├── CartTotal.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── LatestCollection.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NewsLetterBox.jsx
│   │   │   ├── OurPolicy.jsx
│   │   │   ├── ProductItem.jsx
│   │   │   ├── RelatedProducts.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── Title.jsx
│   │   ├── 📂 pages/
│   │   │   ├── About.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Collection.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Orders.jsx
│   │   │   ├── PlaceOrder.jsx
│   │   │   └── Product.jsx
│   │   ├── 📂 context/
│   │   │   └── ShopContext.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env
│   ├── .gitignore
│   ├── vercel.json
│   └── package.json
│
├── 📂 admin/
│   ├── 📂 src/
│   │   ├── 📂 components/
│   │   │   ├── Login.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── 📂 pages/
│   │   │   ├── Add.jsx
│   │   │   ├── List.jsx
│   │   │   └── Orders.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env
│   ├── .gitignore
│   ├── vercel.json
│   └── package.json
│
├── 📂 backend/
│   ├── 📂 config/
│   │   ├── cloudinary.js
│   │   └── mongodb.js
│   ├── 📂 controllers/
│   │   ├── cartController.js
│   │   ├── orderController.js
│   │   ├── productController.js
│   │   └── userController.js
│   ├── 📂 middleware/
│   │   ├── adminAuth.js
│   │   ├── auth.js
│   │   └── multer.js
│   ├── 📂 models/
│   │   ├── orderModel.js
│   │   ├── productModel.js
│   │   └── userModel.js
│   ├── 📂 routes/
│   │   ├── cartRoute.js
│   │   ├── orderRoute.js
│   │   ├── productRoute.js
│   │   └── userRoute.js
│   ├── server.js
│   ├── .env
│   ├── .gitignore
│   ├── vercel.json
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```


---

## 🔮 Future Enhancements

- [ ] Email Notifications
- [ ] Product Reviews & Ratings
- [ ] Multiple Payment Options
- [ ] Discount Coupons


## 📧 Contact


---

## ⭐ Show Your Support

Give a ⭐ if you like this project!

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


access browse: dummy card stripe to give example card
---

