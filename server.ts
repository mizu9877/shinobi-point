import express from 'express'
import cors from 'cors'


const router = express.Router()

const app = express()

const users = require('./routes/api/user')

app.use(cors())
app.use('/api/users', users)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`))