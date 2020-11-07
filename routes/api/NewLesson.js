const router = require("express").Router();
const newLessonCtrl = require("../../controllers/newLessonController");

// Matches with "/api/NewLesson"
router.route("/")
    .post(newLessonCtrl.create);

module.exports = router;

