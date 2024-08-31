const express = require('express')
const { createCustomer } = require('../controller/customerController')
const { transactionAddController } = require('../controller/transactionController')

const router = express.Router()

// Route to create a new user

router.post('/create-customer', createCustomer)
router.post('/customer/add/amount', transactionAddController)
module.exports = router;