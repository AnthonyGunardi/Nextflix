const route = require('express').Router()
const authRoute = require('./auth')
const userRoute = require('./users')
const movieRoute = require('./movies')
const listRoute = require('./lists')

route.use('/api/auth', authRoute)
route.use("/api/users", userRoute)
route.use("/api/movies", movieRoute)
route.use("/api/lists", listRoute)

module.exports = route