const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// setting schema options
// Schema([definition], [options])
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, // trim whitespace off the end
    minlength: 3
  }
}, {
  /**
   * object or boolean - defaults to false.
   * If true, Mongoose adds createdAt and updatedAt properties to
   * your schema and manages those properties for you
   */
  timestamps: true
});

// `UserModel` is a "Model", a subclass of `mongoose.Model`.
const User = mongoose.model('User', userSchema);

module.exports = User;

