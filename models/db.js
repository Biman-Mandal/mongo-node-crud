const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/MONGO_BLOG").then((data) => {
    console.log('connection success')
});

require("./student.model");