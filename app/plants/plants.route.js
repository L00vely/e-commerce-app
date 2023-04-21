const express = require('express');
const plantsRouter = express.Router();
const { getPlants,
    getPlantById,
    createPlant,
    deletePlantById,
    updatePlant, 
    getPlantsByGender,
    getPlantsBySpecie, 
    getPlantsByFamily } = require('./plants.controller');


plantsRouter.get('/', getPlants);
plantsRouter.post('/', createPlant);
plantsRouter.get('/:id', getPlantById);
plantsRouter.put('/:id', updatePlant);
plantsRouter.delete('/:id', deletePlantById);
plantsRouter.get('/:specie', getPlantsBySpecie);
plantsRouter.get('/:gender', getPlantsByGender);
plantsRouter.get('/:family', getPlantsByFamily);

module.exports = plantsRouter;
