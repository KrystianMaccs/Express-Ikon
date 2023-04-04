//importing modules
const express = require('express')
const userController = require('../Controllers/userController')
const { signup, login } = userController
const userAuth = require('../Middleware/userAuth')
const {
    createUser, 

} = require('../Controllers/userController')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post("/register", createUser);

//login route
//router.post('/login', login )

module.exports = router