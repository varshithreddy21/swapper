const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = "db.sqlite";

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`CREATE TABLE product (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name text, 
      description text, 
      owner text
      )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          console.log("Table just created.");
        }
      });
  }
});

module.exports = db;