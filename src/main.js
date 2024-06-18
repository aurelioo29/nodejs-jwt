const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//database
const db = require("./models");
const Role = db.role;
db.sequelize.sync();

//default end point
app.get("/", (req, res) => {
  res.json({ message: "Belajar Microservice di UNPRI" });
});

//routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

//set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server Berjalan pada PORT ${PORT}.`);
});

//Role Permission User
function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}
