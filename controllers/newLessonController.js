const newLesson = require("../models/NewLesson");

// Defining methods for the newLessonCtrl
module.exports = {
    create: function(req, res) {
        db.newLesson.create(req.body)
        .then(dbnewLesson => res.json(dbnewLessonr))
        .catch(err => res.status(422).json(err));
    }
};