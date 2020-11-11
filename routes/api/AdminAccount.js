const router = require("express").Router();
const adminAccountController = require("../../controllers/AdminAccountController");

// Matches with "/api/AdminAccount"
router.route("/:id")
    .get(adminAccountController.findById);
 
module.exports = router;