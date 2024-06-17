const { verifySignUp } = require("../middleware/verifikasiSignUp");
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "X-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/auth/signup", [
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkRoleExisted,
  ]);

  app.post("/api/auth/signin", controller.signin);
};
