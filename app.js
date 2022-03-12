const express = require("express");
const mongoose = require("mongoose");
const { PORT = 3000 } = process.env;
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use(express.json());

async function main() {
  await mongoose.connect("mongodb://localhost:27017/mestodb", {
    useNewUrlParser: true,
  });

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
}

main();

app.use((req, res, next) => {
  req.user = {
    _id: "62279ceea4b1a552ec6903fd",
  };
  next();
});

app.use("/users", require("./routes/users"));
app.use("/cards", require("./routes/cards"));
