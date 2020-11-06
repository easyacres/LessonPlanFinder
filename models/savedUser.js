const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedUserSchema = new Schema({
  // url string for thumbnail image
  thumbnail: {
    type: String,
    default: ""
  },
  // teacher name
  name: {
    type: String,
    required: true
  },
  // course taught
  course: {
    type: String,
    required: true
  },
  // add a saved user
  addUser: {
    type: Boolean,
    default: false
  },

  // Not all ingredients, just the recommended ingredients from scraped web pages
  // from which seed data was sourced
  ingredients: [String]
});

const savedUser = mongoose.model("savedUser", savedUserSchema);

module.exports = savedUser;
