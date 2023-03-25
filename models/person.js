const mongoose = require('mongoose');

// Define a schema for the Person model
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  favoriteFoods: {
    type: [String],
    default: []
  }
});

// Create a Mongoose model based on the schema
const Person = mongoose.model('Person', personSchema);

// Export the Person model
module.exports = Person;
