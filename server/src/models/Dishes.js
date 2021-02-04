const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

// user table
const DishesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  Category: [{
    categoryType:{type: ObjectId, ref:'Category',}

  }],
  type: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  special: {
    type: Boolean,
    required: true,
  },

});

const Dishes = mongoose.model('Dishes', DishesSchema);


module.exports = Dishes;
