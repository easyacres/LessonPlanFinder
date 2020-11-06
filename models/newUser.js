const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newUserSchema = new Schema({
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
  // add new user
  addPlan: {
    type: Boolean,
    default: false
  },

  // Not all ingredients, just the recommended ingredients from scraped web pages
  // from which seed data was sourced
  ingredients: [String]
});

const newUser = mongoose.model("newUser", newUserSchema);

module.exports = newUser;
