require('dotenv').config()
const express = require('express')
const app= express()
const port = 3000
const mongoose = require('mongoose')
const cors = require('cors')
const route = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

//connect database
async function connect() {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}
connect()
  .then(console.log("Database is connected"))
  .catch(err => console.log(err))

//middleware / body parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

//routes
app.use(route)
//errorhandler
app.use(errorHandler)

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})