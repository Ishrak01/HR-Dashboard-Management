const express = require('express');
const router = express.Router();
const {allCandidates,shortlisted,rejected,gender,createCandidate,updateCandidate,deleteCandidate,getSingleCandidate,totalCandidates,getTotalShortlistedCandidates,getTotalRejectedCandidates,totalMaleCandidates,totalFemaleCandidates,creationTime}=require('../controller/candidatesController')






router.post('/createCandidate',createCandidate)
router.delete('/deleteCandidate/:id',deleteCandidate)
router.post('/updateCandidate/:id',updateCandidate)
router.get('/allCandidates',allCandidates)
router.get('/allCandidates',allCandidates)
router.get('/getSingleCandidate/:id',getSingleCandidate)
router.get('/rejected',rejected)
router.get('/gender',gender)
router.get('/totalCandidates',totalCandidates)
router.get('/shortlisted',shortlisted)
router.get('/getTotalShortlistedCandidates',getTotalShortlistedCandidates)
router.get('/getTotalRejectedCandidates',getTotalRejectedCandidates)
router.get('/totalMaleCandidates',totalMaleCandidates)
router.get('/totalFemaleCandidates',totalFemaleCandidates)
router.get('/creationTime',creationTime)






module.exports = router;