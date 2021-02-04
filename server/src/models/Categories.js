const mongoose = require('mongoose');

// user table
const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },

});

const Category = mongoose.model('Category', CategorySchema);


module.exports = Category;
