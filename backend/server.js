import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connnectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// App Config

const app = express()
const Port = process.env.PORT || 4000
connnectDB()
connectCloudinary()

// Middleware
app.use(express.json())
// app.use(cors())
app.use(cors({
    origin: ['https://aodaihighlands-1.onrender.com', 'http://localhost:5173'], // Thêm cả link render frontend và link chạy local của bạn vào đây
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))



// API Endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req,res) => {
    res.send('API Working')
})

app.listen(Port,() => console.log('Server is running on port : '+ Port))
