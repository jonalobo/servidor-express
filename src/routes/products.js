const { Router } = require("express");

//Controladores
const { addProducts, getProducts, getProductsById } = require("../controller/products");

const rutaProductos = Router();

/* rutaProductos.get('/id/:id', getProductsById) */
/* rutaProductos.post("/", addProducts); */
rutaProductos.get("/:id", getProductsById);

module.exports = rutaProductos;
