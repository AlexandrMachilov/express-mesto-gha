const express = require("express");
const { getUsers, getUser, createUser } = require("../controllers/users");

const usersRoutes = express.Router();

usersRoutes.get("/", getUsers);

usersRoutes.get("/:id", getUser);

usersRoutes.post("/", express.json(), createUser);

module.exports = usersRoutes;

/* {"name": "John",
 "about": "Doe",
 "avatar": "https://cdnn21.img.ria.ru/images/156266/34/1562663413_545:0:1625:1080_1920x0_80_0_0_3172fc6e73334088e2938263ce57ee5a.jpg"
 } */
