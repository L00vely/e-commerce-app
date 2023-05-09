const pool = require('../model/database');

const { getPlants,
    getPlantById,
    getPlantsBySpecie,
    getPlantsByFamily,
    getPlantsByGender,
    createPlant,
    deletePlantById,
    updatePlant } = require('../model/ecommerce');



exports.getPlants = async(req, res, next) => {
    try {
        const plants = await getPlants();
        return res.status(200).json({ data: plants.rows })
    } catch(err) {
        return res.status(404).json({
            error: err
        })
    }
}

exports.createPlant = async(req, res, next) => {
    const { name, family, gender, specie, price, stock } = req.body;
    try {
        const plant = await createPlant(name, family, gender, specie, price, stock);
        return res.status(201).json({ data: plant.rows })
    } catch(err) {
        return res.status(400).json({
            error: err
        })
    }
}

exports.updatePlant = async (req, res, next) => {
    const { name, family, gender, specie, price, stock } = req.body;
    try {
        const plant = await updatePlant(name, family, gender, specie, price, stock);
        return res.status(200).json({ data: plant.rows })
    } catch(err) {
        return res.status(404).json({
            error: err
        })
    }
}

exports.getPlantById = async(req, res, next) => {
    const { id }= req.params;
    try {
        const plant = await getPlantById(id);
        return res.status(200).json({ data: plant.rows })
    } catch(err) {
        return res.status(404).json({
            error: err
        })
    }
}

exports.deletePlantById = async (req, res, next) => {
    const { id }= req.params;
    try {
        const plant = await deletePlantById(id);
        return res.status(200).json({ data: plant.rows })
    } catch(err) {
        return res.status(400).json({
            error: err
        })
    }
}

exports.getPlantsBySpecie = async(req, res, next) => {
    const { specie }= req.params;
    try {
        const plant = await getPlantsBySpecie(specie);
        return res.status(200).json({ data: plant.rows })
    } catch(err) {
        return res.status(404).json({
            error: err
        })
    }
}

exports.getPlantsByFamily = async(req, res, next) => {
    const { family }= req.params;
    try {
        const plant = await getPlantsByFamily(family);
        return res.status(200).json({ data: plant.rows })
    } catch(err) {
        return res.status(404).json({
            error: err
        })
    }
}

exports.getPlantsByGender = async(req, res, next) => {
    const { gender }= req.params;
    try {
        const plant = await getPlantsByGender(gender);
        return res.status(200).json({ data: plant.rows })
    } catch(err) {
        return res.status(404).json({
            error: err
        })
    }
}

