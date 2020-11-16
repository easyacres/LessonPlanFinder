const router = require("express").Router();
const lessonsmainsController = require("../../controllers/lessonsmainController");

// Matches with "/api/lessonmain"
router.route("/")
  .get(lessonsmainsController.findAll)
  .post(lessonsmainsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(lessonsmainsController.findById)
  .put(lessonsmainsController.update)
  .delete(lessonsmainsController.remove);

module.exports = router;