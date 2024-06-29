const db = require('./db');

function getAllProducts(callback) {
  const sql = "SELECT * FROM product";
  db.all(sql, [], (err, rows) => {
    callback(err, rows);
  });
}

function addProduct(product, callback) {
  const { name, description, owner, image } = product;
  const sql = 'INSERT INTO product (name, description, owner, image) VALUES (?, ?, ?, ?)';
  db.run(sql, [name, description, owner, image], function(err) {
    if (err) {
      callback(err);
    } else {
      callback(null, { id: this.lastID });
    }
  });
}

module.exports = {
  getAllProducts,
  addProduct
};
