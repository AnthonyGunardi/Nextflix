const route = require('express').Router()
const AuthController = require('../controllers/auth')

//Register 
route.post('/register', AuthController.register)
//Login
route.post('/login', AuthController.login)

module.exports = route

