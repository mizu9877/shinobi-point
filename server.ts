const express = require('express')
const router = express.Router()

const app = express()

const users = require('./routes/api/user')

app.use('/api/users', users)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`))