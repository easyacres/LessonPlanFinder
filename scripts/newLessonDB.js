const mongoose = require("mongoose");
const db = require("../models/NewLesson");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lessonplan");

const newLessonSeed = [
  {

  }
];

db.newLesson.remove({})
.then(() => db.newLesson.collection.insertMany(newLessonSeed))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});