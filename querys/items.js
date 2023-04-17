const express = require('express');
const itemsRouter = express.Router();
const { getItems,
    getItemById,
    createItem,
    deleteItemById,
    updateItem } = require('../util/items');


itemsRouter.get('/', getItems);
itemsRouter.post('/', createItem);
itemsRouter.get('/:id', getItemById);
itemsRouter.put('/:id', updateItem);
itemsRouter.delete('/:id', deleteItemById);

module.exports = itemsRouter;
