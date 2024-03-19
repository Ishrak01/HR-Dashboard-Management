const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // Additional fields as needed
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
