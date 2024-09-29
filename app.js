const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')

const app = express()

const PORT = 4000

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// Enable CORS for all origins
app.use(cors());

// Routes
app.use('/users', userRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
