const mongoose = require("mongoose");
const playlist = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: String,
  },
});


module.exports=mongoose.model('user',playlist)