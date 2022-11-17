const mongoose = require('mongoose');

const { Schema } = mongoose;

const CardSchema = new Schema({
  imgsrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: false,
    required: true,
  },
  view: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const Card = mongoose.model('CardCollection', CardSchema);

module.exports = Card;
