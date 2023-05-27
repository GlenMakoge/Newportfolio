const express = require('express') 
const cors = require('cors')
const form = require('./routes/formDetail')
require('dotenv').config()

//express app
const app = express()
const mongoose = require("mongoose")


//middleware
app.use(express.json())
app.use(cors())


//rout
app.use('/', form)


// app.use((req, res, next) => {
//     console.log('req.path, req.method')
// })


// app.get("/", cors(), (req, res)=>{

// })

// app.post("/", async(req, res)=>{
//     const {name, email, msg} = req.body


//      const data = {
//          name:name,
//          email:email,
//          msg:msg
//      }

//     await collection.insertMany([data])
// })


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
        //listen to request
    app.listen(process.env.PORT, () => {
    console.log('Connected to db & listening on port', process.env.PORT)
})
  })
  .catch((error) => {
        console.log(error)
  })

//QWxBZSvVFV9RHouM