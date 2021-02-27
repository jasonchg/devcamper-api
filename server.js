const express = require('express')
const env = require('dotenv')

// Load env vars
env.config({
  path: './config/config.env',
})
const app = express()
const PORT = process.env.PORT || 5000

// Routes

app.get('/', (req, res) => {
  res
    .status(200)
    .send(
      '<div style="display:flex; flex-direction:row; justify-content:center; background:blue; color:white;width:100%; font-size:24px; overflow:none;padding:20px 0;">Api is running</div>'
    )
})

app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({
    success: true,
    msg: 'show all bootcamps',
  })
})

app.post('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({
    success: true,
    msg: 'create all bootcamps',
  })
})

app.put('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({
    success: true,
    msg: 'update all bootcamps',
  })
})

app.delete('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({
    success: true,
    msg: 'delete all bootcamps',
  })
})

// Middleware

// Listener

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
