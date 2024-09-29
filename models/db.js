const sqlite3 = require('sqlite3').verbose();

// Create a new SQLite database
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');

    // Create the User table
    db.run(`
      CREATE TABLE IF NOT EXISTS User (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
      )
    `, (err) => {
      if (err) {
        console.error('Error creating User table:', err.message);
      } else {
        console.log('User table created or already exists.');
      }
    });

    // Create the Address table with a foreign key to User table
    db.run(`
      CREATE TABLE IF NOT EXISTS Address (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        address TEXT NOT NULL,
        userId INTEGER,
        FOREIGN KEY(userId) REFERENCES User(id)
      )
    `, (err) => {
      if (err) {
        console.error('Error creating Address table:', err.message);
      } else {
        console.log('Address table created or already exists.');
      }
    });
  }
});

module.exports = db;
