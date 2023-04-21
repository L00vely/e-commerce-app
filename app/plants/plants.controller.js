const pool = require('../../config/pool');

const getPlants = (req, res, next) => {
    pool.query('SELECT * FROM plant ORDER BY plant_id ASC', (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
    })
}

const createPlant = (req, res, next) => {
    const { name, price, description } = req.body;
    pool.query('INSERT INTO plant (name, family, gender, specie, price, stock) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [ name, family, gender, specie, price, stock ], (error, results) => {
        if (error) {
          throw error;
        }
        res.status(201).send('plant added');
    })
}

const getPlantById = (req, res, next) => {
    const { id }= req.params;
    pool.query('SELECT * FROM plant WHERE plant_id = $1', [ id ], (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
    })
}

const deletePlantById = (req, res, next) => {
    const { id }= req.params;
    pool.query('DELETE FROM plant WHERE plant_id = $1', [ id ], (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).send(`plant deleted with ID: ${id}`);
    })
}

const updatePlant= (req, res, next) => {
    const { id }= req.params;
    const { name, email, password, phone } = req.body;
    pool.query('UPDATE plant SET name = $1, family = $2, gender = $3, specie = $4, price = $5, stock = $6 WHERE plant_id = $7', 
        [ name, family, gender, specie, price, stock, id ], (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).send(`plant updated with ID: ${id}`);
    })
}

const getPlantsBySpecie = (req, res, next) => {
    const { specie }= req.params;
    pool.query('SELECT * FROM plant WHERE specie = $1', [ specie ], (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
    })
}

const getPlantsByFamily = (req, res, next) => {
    const { family }= req.params;
    pool.query('SELECT * FROM plant WHERE family = $1', [ family ], (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
    })
}

const getPlantsByGender = (req, res, next) => {
    const { gender }= req.params;
    pool.query('SELECT * FROM plant WHERE gender = $1', [ gender ], (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
    })
}


module.exports = {
    getPlants,
    getPlantById,
    getPlantsBySpecie,
    getPlantsByFamily,
    getPlantsByGender,
    createPlant,
    deletePlantById,
    updatePlant
};