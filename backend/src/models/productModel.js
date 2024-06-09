const db = require('./db');

function getAllProducts(callback) {
  const sql = "SELECT * FROM product";
  db.all(sql, [], (err, rows) => {
    callback(err, rows);
  });
}

function addProduct(product, callback) {
  const { name, description, owner } = product;
  const sql = 'INSERT INTO product (name, description, owner) VALUES (?,?,?)';
  db.run(sql, [name, description, owner], function(err) {
    callback(err, { id: this.lastID });
  });
}

module.exports = {
  getAllProducts,
  addProduct
};