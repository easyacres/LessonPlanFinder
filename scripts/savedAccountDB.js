const mongoose = require("mongoose");
const db = require("../models/SavedAccount");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lessonplan");

const savedAccountSeed = [
  {

  }
];

db.savedAccount.remove({})
.then(() => db.savedAccount.collection.insertMany(savedAccountSeed))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});