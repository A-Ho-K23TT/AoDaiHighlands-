import {v2 as cloudinary} from 'cloudinary';

const connectCloudinary = async () => {

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    })
    // Kiểm tra xem các biến môi trường đã được thiết lập hay chưa
    console.log("Cloudinary Config:", {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME ? "✅ Có" : "❌ Không",
        api_key: process.env.CLOUDINARY_API_KEY ? "✅ Có" : "❌ Không",
        api_secret: process.env.CLOUDINARY_API_SECRET ? "✅ Có" : "❌ Không"
    });

}


export default connectCloudinary;