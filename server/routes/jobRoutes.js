const express = require('express');
const router = express.Router();

const {recentJobs,individualJob,createJob,updateJob,deleteJob,allJobs}=require('../controller/jobController')


router.post('/createJob',createJob)
router.put('/updateJob',updateJob)
router.delete('/deleteJob',deleteJob)
router.get('/recentJobs',recentJobs)
router.get('/individualJob/:id',individualJob)
router.get('/allJobs',allJobs)









module.exports = router;