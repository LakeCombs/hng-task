const mongoose = require("mongoose");

const personaSchema = new mongoose.Schema({
  title: {
    type: String,
  },

  name: {
    type: String,
  },

  age: {
    type: Number,
  },

  email: {
    type: String,
  },

  maritalStatus: {
    type: String,
  },

  educationLevel: {
    type: String,
  },

  occpationalStatus: {
    type: String,
  },

  background: {
    type: String,
  },
  goal: {
    type: String,
  },
  Professional: {
    type: String,
  },
});

module.exports = mongoose.model("persona", personaSchema);
