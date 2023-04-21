const pool = require('../pool');

const getUsers = (req, res, next) => {
    pool.query('SELECT * FROM user ORDER BY user_id ASC', (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
    })
}

const createUser = (req, res, next) => {
    const { name, price, description } = req.body;
    pool.query('INSERT INTO user (name, email, password, phone) VALUES ($1, $2, $3, $4) RETURNING *', [ name, email, password, phone ], (error, results) => {
        if (error) {
          throw error;
        }
        res.status(201).send('user added');
    })
}

const getUserById = (req, res, next) => {
    const { id }= req.params;
    pool.query('SELECT * FROM user WHERE user_id = $1', [ id ], (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
    })
}

const deleteUserById = (req, res, next) => {
    const { id }= req.params;
    pool.query('DELETE FROM user WHERE user_id = $1', [ id ], (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).send(`user deleted with ID: ${id}`);
    })
}

const updateUser= (req, res, next) => {
    const { id }= req.params;
    const { name, email, password, phone } = req.body;
    pool.query('UPDATE user SET name = $1, price = $2, description = $3 WHERE user_id = $4', [ name, email, password, phone, id ], (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).send(`user updated with ID: ${id}`);
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUserById,
    updateUser
};