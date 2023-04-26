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

  //Comprobación si viene el query
  if (limite != undefined) {
    //Debo parsearlo a entero
    const limiteParseado = parseInt(limite);
    const lista = [];
    for (let i = 0; i < limiteParseado; i++) {
      const element = dataJson[i];
      lista.push(element);
    }
    res.json(lista);
  } else {
    res.json(dataJson);
  }
};

//Controlador de producto por id en parametro valor de ruta dinámico
const getProductsById = async (req = request, res = response) => {
  const id = req.params.id;
  //Voy a parsear el id
  const idParseado = parseInt(id);

  //Ahora voy a leer los productos almacenados
  const data = await leer("productos.txt");
  //Los paso a Json
  const dataJson = JSON.parse(data);

  const elemento = [];

  dataJson.map((e) => {
    if (idParseado == e.id) {
      const demo = e;
      elemento.push(demo)
    }
  });

  if (elemento.length >= 1) {
    res.json(elemento[0]);
  } else {
    res.json({ msg: `El producto con el id ${idParseado} no existe` });
  }

  
};

module.exports = {
  getProducts,
  getProductsById,
};
