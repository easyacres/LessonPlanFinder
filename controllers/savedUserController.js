const db = require("../models/SavedUser");

// Defining methods for savedUserController
module.exports = {
    findById: function(req, res) {
        db.savedUser.findById(req.params.id)
        .then(dbSavedUser => res.json(dbSavedUser))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.savedUser.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(dbSavedUser => res.json(dbSavedUser))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.savedUser.findById(req.params.id)
        .then(dbSavedUser => dbSavedUser.remove())
        .then(dbSavedUser => res.json(dbSavedUser))
        .catch(err => res.status(422).json(err));
    }
};