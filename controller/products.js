const {request, response} = require('express')

const products = (req, res=response)=>{
    res.send('Hola')
}

module.exports = {
    products
}