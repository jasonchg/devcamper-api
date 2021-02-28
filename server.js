const express = require('express')
const env = require('dotenv')
const morgan = require('morgan')

// Route files
const bootcamps = require('./routes/bootcamps.js')
const logger = require('./middlewares/logger.js')

// Load env vars
env.config({
  path: './config/config.env',
})
const app = express()
const PORT = process.env.PORT || 5000

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
  app.get('/', (req, res) => {
    res
      .status(200)
      .send(
        '<div style="display:flex; flex-direction:row; justify-content:center;width:100%; font-size:24px; overflow:none;padding:20px 0;">Api is running</div>'
      )
  })
}

// Middleware

// Routes

// Mount Router
app.use('/api/v1/bootcamps', bootcamps)

// Listener

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
