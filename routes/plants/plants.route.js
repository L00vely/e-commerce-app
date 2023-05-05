const express = require('express');
const plantsRouter = express.Router();

const { getPlants,
    getPlantById,
    getPlantsBySpecie,
    getPlantsByFamily,
    getPlantsByGender,
    createPlant,
    deletePlantById,
    updatePlant } = require('../../controller/index.js');


plantsRouter.get('/', getPlants);
plantsRouter.post('/', createPlant);
plantsRouter.get('/:id', getPlantById);
plantsRouter.delete('/:id', deletePlantById);
plantsRouter.put('/:id', updatePlant);
plantsRouter.get('/:specie', getPlantsBySpecie);
plantsRouter.get('/:gender', getPlantsByGender);
plantsRouter.get('/:family', getPlantsByFamily);


module.exports = plantsRouter;
