const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const quizRouter = require('./router/quizRouter')

app.use('/quiz', quizRouter)

app.listen(3000, ()=>{
    console.log('listen start')
})