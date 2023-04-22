const express = require('express')
//Rutas
const rutaProductos = require('./routes/products')

//Variables de entorno
require('dotenv').config()
const PORT = process.env.PORT

const app = express()

//Middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use(rutaProductos)


//Accionar servidor
app.listen((PORT), ()=>{
    console.log(`Servidor en línea en el puerto ${PORT}`)
})