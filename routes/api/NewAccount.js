const router = require("express").Router();
const newAccountCtrl = require("../../controllers/newAccountController");

// Matches with "/api/NewAccount"
router.route("/")
    .post(newAccountCtrl.create);

module.exports = router;


