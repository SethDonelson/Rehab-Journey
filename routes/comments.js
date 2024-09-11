const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");



//use middleware for file, specified at the top
router.post("/createComment/:id", commentsController.createComment);


module.exports = router;