const db = require('./db');

function getAllSwaps(swapproduct,callback) {
  const sql = 'SELECT * FROM swap where product_id = ? ';
  db.all(sql, [swapproduct], (err, rows) => {
    callback(err, rows);
  });
}



function addSwap(swapproduct, callback) {
  const { name, description, owner, product_id, image } = swapproduct;
  const sql = 'INSERT INTO swap (name, description, owner, product_id, image) VALUES (?, ?, ?, ?, ?)';
  db.run(sql, [name, description, owner, product_id, image], function(err) {
    if (err) {
      callback(err);
    } else {
      callback(null, { id: this.lastID });
    }
  });
}

module.exports = {
  getAllSwaps,
  addSwap
};