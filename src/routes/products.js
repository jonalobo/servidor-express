const { Router } = require("express");

//Controladores
const { getProductsById, getProducts } = require("../controller/products");

const rutaProductos = Router();

rutaProductos.get("/products", getProducts);
rutaProductos.get("/products/:id", getProductsById);


module.exports = rutaProductos;
