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

});

const savedUser = mongoose.model("savedUser", savedUserSchema);

module.exports = savedUser;
