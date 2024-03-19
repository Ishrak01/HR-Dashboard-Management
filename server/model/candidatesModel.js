const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    validate: {
      validator: function(v) {
        return ['male', 'female', 'other'].includes(v.toLowerCase());
      },
      message: props => `${props.value} is not a valid gender!`
    },
    required: true
  },
  status: {
    type: String,
    validate: {
      validator: function(v) {
        // Custom validator function to allow both lower and upper case
        return ['shortlisted', 'rejected', 'pending'].includes(v.toLowerCase());
      },
      message: props => `${props.value} is not a valid status!`
    },
    default: 'pending'
  },
  // Reference to the Job model
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job' // This should match the name used when defining the Job model
  }
}, { timestamps: true });

module.exports = mongoose.model('Candidate', candidateSchema);
