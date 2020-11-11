const router = require("express").Router();
const savedUserController = require("../../controllers/savedUserController");

// Matches with "/api/SavedUser"
router.route("/:id")
    .get(savedUserController.findById)
    .put(savedUserController.update)
    .delete(savedUserController.remove);

module.exports = router;