const express = require(`express`);
const router = express.Router();
const { postsCreate, createAuthor } = require("./authors.controllers");

router.post("/", createAuthor);
router.post("/:authorId", postsCreate);

module.exports = router;
