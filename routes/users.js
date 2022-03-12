const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  editUser,
  editUsersAvatar,
} = require("../controllers/users");

const usersRoutes = express.Router();

usersRoutes.get("/", getUsers);

usersRoutes.get("/:id", getUser);

usersRoutes.post("/", express.json(), createUser);

usersRoutes.patch("/me", editUser);

usersRoutes.patch("/me/avatar", editUsersAvatar);

module.exports = usersRoutes;
