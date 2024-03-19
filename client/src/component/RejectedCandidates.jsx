import React from 'react';
import { useGetTotalRejectedCandidatesQuery } from '../Features/candidate/candidateApi';

const TotalRejected = () => {
  const { data, isLoading, isError } = useGetTotalRejectedCandidatesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const getTotalRejectedCandidates = data.totalRejected;
  console.log(data.getTotalRejectedCandidates)
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = (getTotalRejectedCandidates / 100) * circumference;


  return (
    <div className='flex justify-between items-center p-8'>
      <p className="font-bold">Total Rejected Candidates: <br /> {getTotalRejectedCandidates}</p>
      <div class="w-full max-w-xs mx-auto">
        <svg class="w-full" viewBox="0 0 150 150">
          <circle cx="75" cy="75" r={radius} fill="none" stroke="#ffcdd0" strokeWidth="8" />
          <circle cx="75" cy="75" r={radius} fill="none" stroke="#f70000" strokeWidth="10" strokeDasharray={circumference} strokeDashoffset={circumference - progress} strokeLinecap="round" />
          <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="20">
            {getTotalRejectedCandidates}%
          </text>
        </svg>
      </div>

    </div>
  );
};

export default TotalRejected;
