const express = require('express');
const router = express.Router();
const candidatesModel = require('../model/candidatesModel')
const jobModel=require('../model/jobModel')

// Create candidate
exports.createCandidate = async (req, res) => {
  const { name, gender, jobId ,status } = req.body; // Extracting jobId from request body
  try {
    // Check if the provided jobId exists
    const jobExists = await jobModel.exists({ _id: jobId });
    if (!jobExists) {
      return res.status(404).json({ error: 'Job not found' });
    }

    // Create the candidate with job reference
    const newCandidate = new candidatesModel({ name, gender, job: jobId,status });
    const savedCandidate = await newCandidate.save();
    res.status(201).json(savedCandidate);
  } catch (err) {
    console.error('Error creating candidate:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};;






// GET all candidates
exports.allCandidates = async (req, res) => {
  try {
    const candidates = await candidatesModel.find().populate('job'); // Populate the job field
    res.json(candidates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};




// Update a candidate
exports.updateCandidate = async (req, res) => {
  const { id } = req.params;
  const updateFields = req.body;
  try {
    const updatedCandidate = await candidatesModel.findByIdAndUpdate(
      id,
      updateFields,
      { new: true }
    ).populate('job'); // Populate the job field
    res.json(updatedCandidate);
  } catch (err) {
    console.error('Error updating candidate:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// Get single candidate by ID
exports.getSingleCandidate = async (req, res) => {
  const candidateId = req.params.id; // Extract candidate ID from request parameters
  try {
    // Find the candidate by ID
    const candidate = await candidatesModel.findById(candidateId).populate('job');
    if (!candidate) {
      return res.status(404).json({ error: 'Candidate not found' });
    }
    res.json(candidate);
  } catch (err) {
    console.error('Error fetching candidate:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a candidate
exports.deleteCandidate = async (req, res) => {
  const { id } = req.params;
  try {
    await candidatesModel.findByIdAndDelete(id);
    res.json({ message: 'Candidate deleted successfully' });
  } catch (err) {
    console.error('Error deleting candidate:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Shortlisted Candidates
exports.shortlisted = async (req, res) => {
  try {
    const shortlistedCandidates = await candidatesModel.find({ status: 'Shortlisted' }).populate('job'); // Populate the job field
    res.json(shortlistedCandidates);
  } catch (err) {
    console.error('Error fetching shortlisted candidates:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
// Rejected Candidates
exports.rejected = async (req, res) => {
  try {
    const rejectedCandidates = await candidatesModel.find({ status: 'Rejected' }).populate('job'); // Populate the job field
    res.json(rejectedCandidates);
  } catch (err) {
    console.error('Error fetching rejected candidates:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Candidates by Gender
exports.gender = async (req, res) => {
  const gender = req.params.gender;
  try {
    const candidatesByGender = await candidatesModel.find({ gender }).populate('job'); // Populate the job field
    res.json(candidatesByGender);
  } catch (err) {
    console.error('Error fetching candidates by gender:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};



exports.getTotalShortlistedCandidates = async (req, res) => {
  try {
    const totalShortlisted = await candidatesModel.countDocuments({ status: { $regex: /shortlisted/i } });
    res.status(200).json({ totalShortlisted });
  } catch (err) {
    console.error('Error retrieving total shortlisted candidates:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};





exports.getTotalRejectedCandidates = async (req, res) => {
  try {
    const totalRejected = await candidatesModel.countDocuments({ status: { $regex: /rejected/i } });
    res.status(200).json({ totalRejected });
  } catch (err) {
    console.error('Error retrieving total rejected candidates:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.totalMaleCandidates = async (req, res) => {
  try {
    const totalMale = await candidatesModel.countDocuments({ gender:  { $regex: /male/i } });

    res.status(200).json({ totalMale });
  } catch (err) {
    console.error('Error retrieving total male candidates:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.totalFemaleCandidates = async (req, res) => {
  try {
    const totalFemale = await candidatesModel.countDocuments({ gender:  { $regex: /female/i } });

    res.status(200).json({ totalFemale });
  } catch (err) {
    console.error('Error retrieving total male candidates:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// GET total number of candidates
exports.totalCandidates = async (req, res) => {
  try {
    const totalCandidates = await candidatesModel.countDocuments();
    res.json({ totalCandidates });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// GET all candidates with creation time
exports.creationTime = async (req, res) => {
  try {
    const candidates = await candidatesModel.find({}, 'createdAt').populate('job'); // Retrieve only the 'createdAt' field
    res.json(candidates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
