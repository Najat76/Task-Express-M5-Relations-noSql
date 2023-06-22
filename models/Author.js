const { model, Schema } = require("mongoose");

const AuthorSchema = new Schema({
  name: String,
});

module.exports = model("Author", AuthorSchema);
