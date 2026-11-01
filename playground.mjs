import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync('playground.db');

db.exec(
    `
    CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY, 
    name TEXT NOT NULL UNIQUE,
    email TEXT, 
    phone TEXT, 
    created_at TEXT NOT NULL)
    `
);

db.prepare(`
    INSERT INTO clients (
    name,
    email,
    phone,
    created_at
    ) VALUES (?, ?, ?, ?)`).run(
        'Завальська Лена',
        'not',
        'not',
        '2026-02-01'
);

db.prepare(    
    `
    INSERT INTO clients(
        name,
        email,
        phone,
        created_at
    ) VALUES (?, ?, ?, ?)`).run(
        'Відділ культури Гостомель',
        'not',
        'not',
        '2026-03-29'
);

db.prepare(
    `INSERT INTO clients(
        name,
        email,
        phone,
        created_at
    ) VALUES (?, ?, ?, ?)`).run(
        'Костянтин Калієвський',
        'not',
        'not',
        '2026-02-06'        
);


console.log(db.prepare('SELECT * FROM clients').all());

console.log(db.prepare('SELECT * FROM clients WHERE id = ?').get(99));












db.exec(
    `
        CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY,
            client_id INTEGER,
            title TEXT,
            qty INTEGER,
            description TEXT,
            status TEXT)
    `
);

db.prepare(
    `
        INSERT INTO projects(
            client_id,
            title,
            qty,
            description,
            status
        ) VALUES (?, ?, ?, ?, ?)`).run(
            1,
            'Статуетка нагорода',
            7,
            '4шт - 15см, 3шт - 20см',
            'done'
);

db.prepare(
    `
        INSERT INTO projects(
            client_id,
            title,
            qty,
            description,
            status
        ) VALUES (?, ?, ?, ?, ?)`).run(
            1,
            'Приз на конкурс Шевченка',
            5,
            '5шт - 20см',
            'done'
);

db.prepare(
    `
        INSERT INTO projects(
            client_id,
            title,
            qty,
            description,
            status
        ) VALUES (?, ?, ?, ?, ?)`).run(
            3,
            'Статуетка танці',
            30,
            '29шт - чорні, 15см, 1 - золото, 20см',
            'done'
);

const rows = db.prepare(
    `
        SELECT
            projects.title,
            clients.name,
            projects.qty
            FROM projects
            JOIN clients ON clients.id = projects.client_id
    `
).all();
console.log(rows);


try{
    db.prepare(
        `
            INSERT INTO clients (name, created_at)
            VALUES (?, ?)
        `
    ).run('Завальська Лена', '2026-11-01');
    console.log('UNEXPECTED: duplicate was accepted');
} catch(e) {
    console.log('OK, rejected:', e.message);
    
}
try{
    db.prepare(
        `
            INSERT INTO clients (name, created_at)
            VALUES (?, ?)
        `
    ).run(null, '2026-11-01');
    console.log('UNEXPECTED: duplicate was accepted');
} catch(e) {
    console.log('OK, rejected:', e.message);
    
}
try{
    db.prepare(
        `
            INSERT INTO clients (name, created_at)
            VALUES (?, ?)
        `
    ).run('Відлділ культури Гостомель', '2026-11-01');
    console.log('UNEXPECTED: duplicate was accepted');
} catch(e) {
    console.log('OK, rejected:', e.message);
    
}

console.log(db.prepare('SELECT * FROM projects').all());
