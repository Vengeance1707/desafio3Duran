const express = require('express');
const ProductManager = require('./ProductManager');

const app = express();
const PORT = 3000;

const products = [
  { id: 1, name: 'Producto 1' },
  { id: 2, name: 'Producto 2' },
  { id: 3, name: 'Producto 3' },

];

const productManager = new ProductManager(products);


app.get('/products', (req, res) => {
  const limit = req.query.limit;
  const products = productManager.getAllProducts(limit);
  res.json({ products });
});


app.get('/products/:pid', (req, res) => {
  const productId = parseInt(req.params.pid);
  const product = productManager.getProductById(productId);

  if (product) {
    res.json({ product });
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});