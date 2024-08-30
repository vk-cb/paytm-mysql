const express = require('express')
const { createCustomer } = require('../controller/customerController')

const router = express.Router()

// Route to create a new user

router.post('/create-customer', createCustomer)

module.exports = router;