import React from 'react';
import { useTotalFemaleCandidatesQuery } from '../Features/candidate/candidateApi';

const TotalFemale = () => {
  const { data, isLoading, isError } = useTotalFemaleCandidatesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const totalFemaleCandidates = data.totalFemale;
  console.log(data.totalFemaleCandidates)
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = (totalFemaleCandidates / 100) * circumference;


  return (
    <div className='flex justify-between items-center p-8'>
      <p className="font-bold">Total Female Candidates: <br /> {totalFemaleCandidates}</p>
      <div class="w-full max-w-xs mx-auto">
        <svg class="w-full" viewBox="0 0 150 150">
          <circle cx="75" cy="75" r={radius} fill="none" stroke="#00e1d1" strokeWidth="8" />
          <circle cx="75" cy="75" r={radius} fill="none" stroke="#28a745" strokeWidth="10" strokeDasharray={circumference} strokeDashoffset={circumference - progress} strokeLinecap="round" />
          <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="20">
            {totalFemaleCandidates}%
          </text>
        </svg>
      </div>

    </div>
  );
};

export default TotalFemale;
