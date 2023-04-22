const {Router} = require('express')


//Controladores
const { products } = require('../controller/products')

const rutaProductos = Router()

rutaProductos.get('/',products)

module.exports = rutaProductos