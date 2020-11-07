const router = require("express").Router();
const savedUserCtrl = require("../../controllers/savedUserController");

// Matches with "/api/SavedUser"
router.route("/:id")
    .get(savedUserCtrl.findById)
    .put(savedUserCtrl.update)
    .delete(savedUserCtrl.remove);

module.exports = router;