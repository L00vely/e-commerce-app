const express = require('express');
const itemsRouter = express.Router();
const { getItems,
    getItemById,
    createItem,
    deleteItemById,
    updateItem } = require('../util/items');


itemsRouter.get('/', getItems);
itemsRouter.post('/', createItem);

module.exports = itemsRouter;
