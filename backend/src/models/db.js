const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = "db.sqlite";

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`CREATE TABLE IF NOT EXISTS product (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      description TEXT,
      owner TEXT,
      image TEXT
    )`,
    (err) => {
      if (err) {
        console.error('Table creation error:', err.message);
      } else {
        console.log("Product table created.");
      }
    });
  }
});

module.exports = db;
