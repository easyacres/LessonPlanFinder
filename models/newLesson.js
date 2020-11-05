const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newLessonSchema = new Schema({
  // lesson plan name
  title: {
    type: String,
    required: true,
  },
  // course the lesson plan goes with
  course: {
    type: String,
    reuired: true,
  },
  // topic of the lesson plan
  topic: {
    type: String,
    required: true,
  },
  // synopsis of the plan
  synopsis: {
      type: String
  },
  // date the lesson plan was created
  date: {
      type: Date,
      default: Date.now
  },

  // Not all ingredients, just the recommended ingredients from scraped web pages
  // from which seed data was sourced
  ingredients: [String],
});

const newLesson = mongoose.model("newLesson", newLessonSchema);

module.exports = newLesson;
