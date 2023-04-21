const express = require('express');
const usersRouter = express.Router();
const { getUsers,
    getUserById,
    createUser,
    deleteUserById,
    updateUser } = require('./users.controller');


usersRouter.get('/', getUsers);
usersRouter.post('/', createUser);
usersRouter.get('/:id', getUserById);
usersRouter.put('/:id', updateUser);
usersRouter.delete('/:id', deleteUserById);

module.exports = usersRouter;
