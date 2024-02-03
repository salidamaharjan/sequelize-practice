const sequelize = require("./config/connection");
const User = require("./model/user");
const userRoute = require("./route/user");
const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(userRoute);

connection();

async function connection() {
  await sequelize.sync({ force: true });
  console.log("All models were synchronized successfully.");
  app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`) );
  await User.create({
    username: "smaharjan",
    password: "password",
  });
}
