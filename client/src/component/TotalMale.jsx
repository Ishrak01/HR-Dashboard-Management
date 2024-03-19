import React from 'react';
import { useTotalMaleCandidatesQuery } from '../Features/candidate/candidateApi';

const TotalMale = () => {
  const { data, isLoading, isError } = useTotalMaleCandidatesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const totalMaleCandidates = data.totalMaleCandidates;
  console.log(data.totalMaleCandidates)
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = (totalMaleCandidates / 100) * circumference;


  return (
    <div className='flex justify-between items-center p-8'>
      <p className="font-bold">Total Male Candidates: <br /> {totalMaleCandidates}</p>
      <div class="w-full max-w-xs mx-auto">
        <svg class="w-full" viewBox="0 0 150 150">
          <circle cx="75" cy="75" r={radius} fill="none" stroke="#007bff" strokeWidth="8" />
          <circle cx="75" cy="75" r={radius} fill="none" stroke="#28a745" strokeWidth="10" strokeDasharray={circumference} strokeDashoffset={circumference - progress} strokeLinecap="round" />
          <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="20">
            {totalMaleCandidates}%

          </text>

        </svg>
      </div>

    </div>
  );
};

export default TotalMale;
