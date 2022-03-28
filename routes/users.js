const express = require('express');
const {
  getUsers,
  getUserById,
  editUser,
  editUsersAvatar,
  getCurrentUser,
} = require('../controllers/users');

const usersRoutes = express.Router();

usersRoutes.get('/', getUsers);

usersRoutes.get('/me', getCurrentUser);

usersRoutes.get('/:id', getUserById);

usersRoutes.patch('/me', editUser);

usersRoutes.patch('/me/avatar', editUsersAvatar);

module.exports = usersRoutes;
