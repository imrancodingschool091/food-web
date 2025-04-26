import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDb } from "./src/config/db.js"
import router from "./src/routes/product.route.js"
import authRouter from "./src/routes/auth.routes.js"
import bookingRouter from "./src/routes/booking.routes.js"
import contactRouter from "./src/routes/contact.route.js"
dotenv.config()


const app=express()


app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("api is working..")
})

app.use("/api",router)
app.use("/auth",authRouter)
app.use("/api/booking",bookingRouter)
app.use("/api",contactRouter)







const port=process.env.PORT ||8080

connectDb()


app.listen(port,()=>{
    console.log(`the app is running on port ${port}`);
})
