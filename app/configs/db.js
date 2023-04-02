const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "ikonalx",
    password: "Krystabella151289",
    port: 5432
});

exports.pool = pool;