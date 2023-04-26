const { request, response } = require("express");

//Clase Productos
const ProductManager = require("../helpers/productManager");
const { leer } = require("../helpers/guardarFs");

//Controlador para lectura de productos
const getProducts = async (req = request, res = response) => {
  //Obtengo el query limite
  const limite = req.query.limit;

  //Ahora voy a leer los productos almacenados
  const data = await leer("productos.txt");
  //Los paso a Json
  const dataJson = JSON.parse(data);

  if (limite != undefined) {
    //Debo parsearlo a entero
    const limiteParseado = parseInt(limite);
    const lista = []
    for (let i = 0; i < limite; i++) {
      const element = dataJson[i];
      lista.push(element)
    }
    res.json(lista)
  } else {
    res.json(dataJson);
  }

  
};

//Controlador de producto por id en parametro valor de ruta dinámico
const getProductsById = (req = request, res = response) => {
  res.send("hola");
};

module.exports = {
  getProducts,
  getProductsById,
};
