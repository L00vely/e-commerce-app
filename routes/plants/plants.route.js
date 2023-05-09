const express = require('express');
const plantsRouter = express.Router();

const { getPlants,
    getPlantById,
    getPlantsBySpecie,
    getPlantsByFamily,
    getPlantsByGender,
    createPlant,
    deletePlantById,
    updatePlant } = require('../../controller/plantsController');


plantsRouter.get('/plants', getPlants);
plantsRouter.post('/plants', createPlant);
plantsRouter.get('/plants/:id', getPlantById);
plantsRouter.delete('/plants/:id', deletePlantById);
plantsRouter.put('/plants/:id', updatePlant);
plantsRouter.get('/plants/species/:specie', getPlantsBySpecie);
plantsRouter.get('/plants/genders/:gender', getPlantsByGender);
plantsRouter.get('/plants/families/:family', getPlantsByFamily);


module.exports = plantsRouter;
