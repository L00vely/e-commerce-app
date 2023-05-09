const pool = require('../model/database');

const getUsers = () => {
    return pool.query('SELECT * FROM user ORDER BY user_id ASC');
}

const createUser = (name, email, password, phone) => { 
    return pool.query('INSERT INTO user (name, email, password, phone) VALUES ($1, $2, $3, $4) RETURNING *', [ name,  email, password, phone ])
}

const getUserByEmail = email => {
    return pool.query('SELECT * FROM user WHERE email = $1', [ email ]);
}

const deleteUserByEmail = email => {
    return pool.query('DELETE FROM user WHERE email = $1', [ email ]);
}

const updateUser= (id, name, email, password, phone) => {
    return pool.query('UPDATE user SET name = $1, price = $2, description = $3 WHERE user_id = $4', [ name, email, password, phone, id ]);
}

const getPlants = () => {
    return pool.query('SELECT * FROM plant ORDER BY plant_id ASC');
}

const createPlant =  (name, family, gender, specie, price, stock) => {
    return pool.query('INSERT INTO plant (name, family, gender, specie, price, stock) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [ name, family, gender, specie, price, stock ]);
}

const getPlantById = id => {
    return pool.query('SELECT * FROM plant WHERE plant_id = $1', [ id ]);
}

const deletePlantById = id => {
    return pool.query('DELETE FROM plant WHERE plant_id = $1', [ id ]);
}

const updatePlant= (id, name, family, gender, specie, price, stock ) => {
    return pool.query('UPDATE plant SET name = $1, family = $2, gender = $3, specie = $4, price = $5, stock = $6 WHERE plant_id = $7', 
        [ name, family, gender, specie, price, stock, id ]);
}

const getPlantsBySpecie = specie => {
    return pool.query('SELECT * FROM plant WHERE LOWER(specie) = LOWER($1)', [ specie ]);
}

const getPlantsByFamily = family => {
    return pool.query('SELECT * FROM plant WHERE LOWER(family) = LOWER($1)', [ family ]);
}

const getPlantsByGender= gender => {
    return pool.query('SELECT * FROM plant WHERE LOWER(gender) = LOWER($1)', [ gender]);
}

/* ORDERS*/
const getOrderById = id => {
    return pool.query('SELECT * FROM order WHERE user_id = $1', [ id ]);
}

const getOrdersByUser = id => {
    return pool.query('SELECT * FROM order WHERE order_id = $1', [ id ]);
}


module.exports = {
    getUsers,
    getUserByEmail,
    createUser,
    deleteUserByEmail,
    updateUser,
    getPlants,
    getPlantById,
    getPlantsBySpecie,
    getPlantsByFamily,
    getPlantsByGender,
    createPlant,
    deletePlantById,
    updatePlant
};