const express = require('express')
const env = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')
const colors = require('colors')
const errorHandler = require('./middlewares/error')

// Route files
const bootcamps = require('./routes/bootcamps')

// Load env vars
env.config({
  path: './config/config.env',
})

// Connect to database
connectDB()

const app = express()
const PORT = process.env.PORT || 5000

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Middleware
app.use(express.json())

// Routes

// Mount Router
app.use('/api/v1/bootcamps', bootcamps)

app.use(errorHandler)

// Listener

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)

// Handle unhandled promise rejections && server will shutdown if the databsae is not connecteed
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.messasge}`.red)
  // Close server & exit process
  server.close(() => process.exit(1))
})
