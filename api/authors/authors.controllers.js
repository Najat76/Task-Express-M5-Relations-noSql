const Author = require("../../models/Author");
const Author = require("../../models/Author");
const Post = require("../../models/Post");

exports.postsCreate = async (req, res, next) => {
  try {
    const { authorId } = req.params;
    const newPost = await Post.create({ ...req.body, author: authorId });
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

exports.createAuthor = async (req, res, next) => {
  try {
    const newAuthor = await Author.create(req.body);
    res.status(201).json(newAuthor);
  } catch (error) {
    next(error);
  }
};
