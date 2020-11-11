const path = require("path");
const router = require("express").Router();
const adminAccount = require("./AdminAccount");
const newAccount = require("./NewAccount");
const newLesson = require("./NewLesson");
const savedAccount = require("./SavedAccount");
const savedLesson = require("./SavedLesson");

// AdminAccount routes
router.use("/AdminAccount", adminAccount);

// NewAccount routes
router.use("/NewAccount", newAccount);

// NewLesson routes
router.use("/NewLesson", newLesson);

// SavedAccount routes
router.use("/SavedAccount", savedAccount);

// SavedLesson routes
router.use("/SavedLesson", savedLesson);


module.exports = router;