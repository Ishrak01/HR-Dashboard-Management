
const express = require('express')
const jobModel=require('../model/jobModel')


// Create a Job
exports.createJob = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newJob = new jobModel({ title, description });
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (err) {
    console.error('Error creating job:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.allJobs=async (req,res)=>{
  try {
    const jobs=await jobModel.find()
    res.json(jobs)
  } catch (error) {
    
  }
}

// Update a Job
exports.updateJob = async (req, res) => {
  const { id } = req.params;
  const updateFields = req.body;
  try {
    const updatedJob = await jobModel.findByIdAndUpdate(
      id,
      updateFields,
      { new: true }
    );
    res.json(updatedJob);
  } catch (err) {
    console.error('Error updating job:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a Job
exports.deleteJob = async (req, res) => {
  const { id } = req.params;
  try {
    await jobModel.findByIdAndDelete(id);
    res.json({ message: 'Job deleted successfully' });
  } catch (err) {
    console.error('Error deleting job:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Recently Added Jobs
exports.recentJobs= async (req, res) => {
  try {
    const recentJobs = await jobModel.find().sort({ createdAt: -1 }).limit(6);
    res.json(recentJobs);
  } catch (err) {
    console.error('Error fetching recent jobs:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Individual Job Details
exports.individualJob= async (req, res) => {
  const jobId = req.params.id;
  try {
    const job = await jobModel.findById(jobId);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json(job);
  } catch (err) {
    console.error('Error fetching job details:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

