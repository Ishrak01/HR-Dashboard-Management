import React, { useEffect, useState } from 'react';
import { useGetTotalRejectedCandidatesQuery } from '../Features/candidate/candidateApi';

const RejectedCandidates = () => {
  const [totalRejectedCandidates, setTotalRejectedCandidates] = useState(null);
  const { data, isLoading, isError } = useGetTotalRejectedCandidatesQuery();

  useEffect(() => {
    if (data) {
      console.log("Data:", data); // Log the entire data object
      const candidates = data.getTotalRejectedCandidates;
      console.log("Total rejected candidates:", candidates);
      setTotalRejectedCandidates(candidates);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = (totalRejectedCandidates / 100) * circumference;

  return (
    <div className='flex justify-between items-center p-8'>
      <p className="font-bold">Rejected Candidates: <br /> {totalRejectedCandidates}</p>
      <div className="w-full max-w-xs mx-auto">
        <svg className="w-full" viewBox="0 0 150 150">
          <circle cx="75" cy="75" r={radius} fill="none" stroke="#ff0808" strokeWidth="8" />
          <circle cx="75" cy="75" r={radius} fill="none" stroke="#28a745" strokeWidth="10" strokeDasharray={circumference} strokeDashoffset={circumference - progress} strokeLinecap="round" />
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="20">
            {totalRejectedCandidates}%
          </text>
        </svg>
      </div>
    </div>
  );
};

export default RejectedCandidates;
