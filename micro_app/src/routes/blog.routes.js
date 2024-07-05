const express = require("express");
const { authJwt } = require("../middleware");
const router = express.Router();
const blogController = require("../controllers/blog.contoller");

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.get("/", [authJwt.verifyToken], blogController.getControllerBlog);
router.post("/", [authJwt.verifyToken], blogController.postContollerBlog);
router.patch("/:id", [authJwt.verifyToken], blogController.updateContollerBlog);
router.delete(
  "/:id",
  [authJwt.verifyToken],
  blogController.deleteControllerBlog
);

module.exports = router;
