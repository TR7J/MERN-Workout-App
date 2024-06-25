// Imports
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// Starting the express app
const app = express()

// Middleware
app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

// Setting up route handlers
app.use('/api/workouts', workoutRoutes)

// Connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
    console.log('Connected to database')
    // Listen for requests
    app.listen(process.env.PORT, ()=>{
    console.log("Listening on port", process.env.PORT)
    })
    })
    .catch((error)=>{
        console.log(error)
    })


