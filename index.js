const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const connectDb = async () => {
try {

    console.log(process.env.PGUSER);
    const pool = new Pool({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT
        }
    )
    await pool.connect();
    const res = await pool.query('SELECT * FROM some_table')
    console.log(res)
    await pool.end()
    } catch (error) {
        console.log(error)
    }
}

connectDb();

