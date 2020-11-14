const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newAccountSchema = new Schema({
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

 
});

const newAccount = mongoose.model("newAccount", newAccountSchema);

module.exports = newAccount;
