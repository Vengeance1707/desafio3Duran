class ProductManager {
    constructor(products) {
      this.products = products;
    }
  
    getAllProducts(limit) {
      if (limit) {
        return this.products.slice(0, limit);
      } else {
        return this.products;
      }
    }
  
    getProductById(productId) {
      return this.products.find(product => product.id === productId);
    }
  }
  
  module.exports = ProductManager;