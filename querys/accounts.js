const express = require('express');
const usersRouter = express.Router();
const { getUsers,
    getUserById,
    createUser,
    deleteUserById,
    updateUser } = require('../util/accounts');


usersRouter.get('/', getUsers);
usersRouter.post('/', createUser);
usersRouter.get('/:id', getUserById);
usersRouter.put('/:id', updateUser);
usersRouter.delete('/:id', deleteUserById);

module.exports = usersRouter;
