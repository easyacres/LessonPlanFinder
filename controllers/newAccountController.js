const db = require("../models/NewAccount");

// Defining methods for the newLessonCtrl
module.exports = {
    create: function(req, res) {
        db.newAccount.create(req.body)
        .then(dbnewAccount => res.json(dbnewAccount))
        .catch(err => res.status(422).json(err));
    }
};