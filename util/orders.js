const pool = require('../pool');

const getOrders = (req, res, next) => {
    pool.query('SELECT * FROM order ORDER BY order_id ASC', (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
    })
}

const createOrder = (req, res, next) => {
    const { name, price, description } = req.body;
    pool.query('INSERT INTO order (name, email, password, phone) VALUES ($1, $2, $3, $4) RETURNING *', [ name, email, password, phone ], (error, results) => {
        if (error) {
          throw error;
        }
        res.status(201).send('order added');
    })
}

const getOrderById = (req, res, next) => {
    const { id }= req.params;
    pool.query('SELECT * FROM order WHERE order_id = $1', [ id ], (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
    })
}

const deleteOrderById = (req, res, next) => {
    const { id }= req.params;
    pool.query('DELETE FROM order WHERE order_id = $1', [ id ], (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).send(`order deleted with ID: ${id}`);
    })
}

const updateOrder= (req, res, next) => {
    const { id }= req.params;
    const { name, email, password, phone } = req.body;
    pool.query('UPDATE order SET name = $1, price = $2, description = $3 WHERE order_id = $4', [ name, email, password, phone, id ], (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).send(`order updated with ID: ${id}`);
    })
}

module.exports = {
    getOrders,
    getOrderById,
    createOrder,
    deleteOrderById,
    updateOrder
};