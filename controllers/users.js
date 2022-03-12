const User = require("../models/user");
const ErrorNotFound = require("../errors/ErrorNotFound");

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => {
      return res.status(500).send({ message: "Произошла ошибка" });
    });
};

module.exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .orFail(() => {
      throw new ErrorNotFound(`Пользователь с id ${req.params.id} не найден`);
    })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      console.dir(err);
      if (err.name === "CastError") {
        return res.status(400).send({ message: "Неверный id пользователя" });
      }
      if (err.statusCode === 404) {
        return res.status(404).send({ message: err.errorMessage });
      }
      return res.status(500).send({ message: err.errorMessage });
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      console.dir(err);
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: "Переданы невалидные данные" });
      }
      if (err.statusCode === 404) {
        return res.status(404).send({ message: err.errorMessage });
      }
      return res.status(500).send({ message: "Произошла ошибка" });
    });
};

module.exports.editUser = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true,
      runValidators: true,
    }
  )
    .orFail(() => {
      throw new ErrorNotFound(`Пользователь с id ${req.user._id} не найден`);
    })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      console.dir(err);
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: "Переданы невалидные данные" });
      }
      if (err.statusCode === 404) {
        return res.status(404).send({ message: err.errorMessage });
      }
      return res.status(500).send({ message: "Произошла ошибка" });
    });
};

module.exports.editUsersAvatar = (req, res) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
    }
  )
    .orFail(() => {
      throw new ErrorNotFound(`Пользователь с id ${req.user._id} не найден`);
    })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      console.dir(err);
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: "Переданы невалидные данные" });
      }
      if (err.statusCode === 404) {
        return res.status(404).send({ message: err.errorMessage });
      }
      return res.status(500).send({ message: "Произошла ошибка" });
    });
};
