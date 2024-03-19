import React from 'react'
import Menu from '../component/Menu'
import Candidates from './Candidates'
import RejectedCandidates from './RejectedCandidates'
import ShortListedCandidate from './ShortListedCandidate'
import TotalFemale from './TotalFemale'
import TotalMale from './TotalMale'
import TotalTimeChart from './TotalTimeChart'
import Welcome from './Welcome'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-5 gap-2 mx-10' >
      <div className=' min-h-[250px] row-span-3'><Menu /></div>
      <div className=' min-h-[250px]'><Candidates /></div>
      <div className=' min-h-[250px]'><ShortListedCandidate /></div>
      <div className=' min-h-[250px]'><RejectedCandidates /></div>
      <div className=' min-h-[250px]  row-span-3'><Welcome /></div>
      <div className=' min-h-[250px]  col-span-2 row-span-2'><TotalTimeChart /></div>
      <div className=' min-h-[250px]'><TotalMale /></div>

      <div className=' min-h-[250px]'><TotalFemale /></div>

    </div>
  )
}

export default Dashboard