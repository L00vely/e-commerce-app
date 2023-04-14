const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'david',
    host: 'localhost',
    database: 'api',
    password: '316310',
    port: 5432,
});

const getItems = (req, res, next) => {
    pool.query('SELECT * FROM item ORDER BY item_id ASC', (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
    })
}

const createItem = (req, res, next) => {
    const { name, price, description } = req.body;
    pool.query('INSERT INTO item (name, price, description) VALUES ($1, $2, $3) RETURNING *', [ name, price, description ], (error, results) => {
        if (error) {
          throw error;
        }
        res.status(201).send('Item added');
    })
}

const getItemById = (req, res, next) => {
    const { id }= req.params;
    pool.query('SELECT * FROM item WHERE item_id = $1', [ id ], (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
    })
}

const deleteItemById = (req, res, next) => {
    const { id }= req.params;
    pool.query('DELETE FROM item WHERE item_id = $1', [ id ], (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).send(`Item deleted with ID: ${id}`);
    })
}

const updateItem= (req, res, next) => {
    const { id }= req.params;
    const { name, price, description } = req.body;
    pool.query('UPDATE item SET name = $1, price = $2, description = $3 WHERE item_id = $4', [ name, price, description, id ], (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).send(`Item updated with ID: ${id}`);
    })
}


module.exports = {
    getItems,
    createItem,
    getItemById,
    deleteItemById,
    updateItem
}