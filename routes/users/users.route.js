const express = require('express');
const usersRouter = express.Router();
const { getUsers, createUser, getUserById, updateUser, deleteUserById } = require('../../controller/index');


usersRouter.get('/', getUsers);
usersRouter.post('/', createUser);
usersRouter.get('/:id', getUserById);
usersRouter.put('/:id', updateUser);
usersRouter.delete('/:id', deleteUserById);

module.exports = usersRouter;
