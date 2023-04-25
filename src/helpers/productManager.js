const { guardar, leer } = require("./guardarFs");
let productos = [];

class ProductManager {
  constructor({ title, description, price, thumbnail, code, stock }) {
    this.title = title,
      this.description = description,
      this.price = price,
      this.thumbnail = thumbnail,
      this.code = code,
      this.stock = stock;
  }
  addProduct() {
    const id = productos.length + 1;
    const product = {
      id,
      title: this.title,
      description: this.description,
      price: this.price,
      thumbnail: this.thumbnail,
      code: this.code,
      stock: this.stock,
    };
    productos.push(product);
    const data = JSON.stringify(productos);
    guardar("productos.txt", data);
  }
  async getProductById() {
    const datos = await leer('./productos.txt')
    console.log(JSON.parse(datos))
  }
}

module.exports = ProductManager
