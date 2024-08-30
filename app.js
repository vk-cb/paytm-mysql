const express = require('express')
const User = require('./model/user')
const sequelize = require('./config/databse')
const app = express()
const userRouter = require('./routes/userRoutes')
// Middleware to parse JSON request bodies

app.use(express.json())
app.use('/api', userRouter)
sequelize.sync();

app.listen(8000 , ()=>{
    console.log('Server listening in http://localhost:8000')
})