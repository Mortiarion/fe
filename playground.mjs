import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync('playground.db');

db.exec('CREATE TABLE IF NOT EXISTS clients (id INTEGER PRIMARY KEY, name TEXT NOT NULL UNIQUE)');

db.prepare('INSERT INTO clients (name) VALUES (?)').run(123);
db.prepare('INSERT OR IGNORE INTO clients (name) VALUES (?)').run('first client');

db.prepare('INSERT INTO clients (name) VALUES (?)').run('two client');

db.prepare('INSERT INTO clients (name) VALUES (?)').run('third client');

console.log(db.prepare('SELECT * FROM clients').all());

console.log(db.prepare('SELECT * FROM clients WHERE id = ?').get(99));
