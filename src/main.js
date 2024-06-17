const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:3000",
};

dotenv.config();
const port = process.env.PORT;

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./models");
const Role = db.ROLES;
db.sequelize.sync();

// end point basic
app.get("/", (req, res) => {
  const debugMessage = "Welcome to Main Page";
  res.json({ message: debugMessage });
  console.log(debugMessage);
});

// routes
// require("../src/routes/auth.routes.js");
require("../src/routes/user.routes.js");
// require("../src/routes/user.routes.js");

// start to run server
app.listen(port, () => {
  console.log("Express API running in http://localhost:" + port);
});

// role permission
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
