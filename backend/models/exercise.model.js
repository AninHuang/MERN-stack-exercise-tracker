const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  username: { type: String, required: true},
  description: { type: String, required: true},
  duration: { type: Number, required: true},
  data: { type: Date, required: true},
}, {
  timestamps: true,
});

// `exerciseModel` is a "Model", a subclass of `mongoose.Model`.
const exerciseModel = mongoose.model('Exercise', exerciseSchema);

module.exports = exerciseModel;