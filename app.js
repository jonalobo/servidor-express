const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT
const app = express()

app.get('/',(req,res)=>{
    res.send('hola')
})

app.listen((PORT), ()=>{
    console.log('Servidor en línea')
})