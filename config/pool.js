const { Pool } = require("pg");

const pool = new Pool({
    user: 'codecademy',
    host: 'localhost',
    database: 'api',
    password: 'postgres',
    port: 5432,
});

module.exports = pool;