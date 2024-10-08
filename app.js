const express = require('express')
const User = require('./model/user')
const sequelize = require('./config/databse')
const app = express()
const userRouter = require('./routes/userRoutes')
const customerRouter = require('./routes/customerRoutes')
const customer = require('./model/customer-schema')
const TransactionAmount = require('./model/transaction/transaction');
// Middleware to parse JSON request bodies

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', customerRouter)
// app.use(customer)
sequelize.sync().then(()=> {
    app.listen(8000 , ()=>{
        console.log('Server listening in http://localhost:8000')
    })
})

