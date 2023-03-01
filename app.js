import express from 'express'
import connectDB from './config/Database.js'
import userRoutes from './routes/userRoutes.js'

const app = express()
const DATABASE_URL = "mongodb://localhost:27017"

// Database Connection
connectDB(DATABASE_URL)

// JSON
app.use(express.json())

// Load Routes
app.use("/api/user", userRoutes)

app.listen(8000, () => {
  console.log(`Server listening at http://localhost:8000`)
})