const { request, response } = require("express");
const ProductManager = require("../helpers/productManager");



const addProducts = (req = request, res = response) => {
  const data = req.body;
  const ff = new ProductManager(data)
  ff.addProduct()
  res.send({ msg: 'Producto agregado' })
};
const getProducts = (req = request, res = response) => {

};
const getProductsById = (req = request, res = response) => {
  ProductManager.getProductsById()
  res.send('hiola');
};

module.exports = {
  addProducts,
  getProducts,
  getProductsById
};
