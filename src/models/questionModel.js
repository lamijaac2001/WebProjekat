
const mongoose = require('mongoose');


const questionSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  travelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Travel',
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
  isAnswered: {
    type: Boolean,
    default: false,
  },
  
});

module.exports = mongoose.model('Question', questionSchema);