const { model, Schema } = require("mongoose");

const TagSchema = new Schema({
  name: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
});

module.exports = model("Tag", TagSchema);
