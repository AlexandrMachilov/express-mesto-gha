const { errors } = require('celebrate');
const express = require('express');
const mongoose = require('mongoose');
const { login, createUser } = require('./controllers/users');
const { auth } = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');
const {
  registerValidation,
  loginValidation,
} = require('./middlewares/validation');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.json());

async function main() {
  await mongoose.connect('mongodb://localhost:27017/mestodb', {
    useNewUrlParser: true,
  });
  app.listen(PORT);
}

main();

app.post('/signin', loginValidation, login);
app.post('/signup', registerValidation, createUser);
app.use(auth);
app.use('/users', require('./routes/users'));
app.use('/cards', require('./routes/cards'));

app.use(errors());
app.use(errorHandler);
app.use((req, res) => {
  res.status(404).send({ message: "Sorry can't find that!" });
});
