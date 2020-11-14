const path = require("path");
const router = require("express").Router();
const newAccount = require("./NewAccount");
const newLesson = require("./NewLesson");
const savedUser = require("./SavedUser");

// NewAccount routes
router.use("/NewAccount", newAccount);

// NewLesson routes
router.use("/NewLesson", newLesson);

// SavedUser routes
router.use("/SavedUser", savedUser);

module.exports = router;