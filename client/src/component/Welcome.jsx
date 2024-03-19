import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { Link } from 'react-router-dom';
import { useCreateJobMutation, useRecentJobsQuery } from '../Features/job/jobApi';

const Welcome = () => {
  const { data: recentJob } = useRecentJobsQuery();

  const [createJob, { data }] = useCreateJobMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateJob = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please provide both title and description for the job.");
      return;
    }
    console.log(title)
    console.log(description)
    createJob({
      title: title,
      description: description
    });
  };

  useEffect(() => {
    if (data) {
      toast.success('New Job Created!')
      setIsModalOpen(false)
    }
  }, [data]);


  return (
    <div className='justify-between space-y-[100px]'>
      <div className='items-center text-center font-bold flex flex-col gap-4'>
        <p1>Welcome back, Hasin Ishrak</p1>
        <button className='border-4 rounded-md p-2 bg-[#11998e]' onClick={() => setIsModalOpen(true)}>+ Create New job</button>
        <Link to='/createApplicant' className='border-4 rounded-md p-2 bg-[#11998e]' > Create Applicant</Link>
      </div>

      <div>
        <p className="p-4 font-semibold">Recent Added Jobs</p>

        {/* Mapping data to render job names with total applicants */}
        {recentJob && recentJob.map((job, index) => (
          <div key={index} className="border bg-[#b9f2e5] border-gray-300 p-1 rounded-md mb-2">
            <p className="text-xl font-semibold">{job.title}</p>
            <p>Category: {job.description}</p>
          </div>
        ))}
      </div>

      {/* Modal for creating a new job */}
      {isModalOpen && (
        <>
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white p-4 flex-col rounded-md">
              <form onSubmit={handleCreateJob}>
                <h2 className="text-xl font-semibold mb-2">Create New Job</h2>
                <input
                  type="text"
                  id="title"
                  placeholder="Job Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="border rounded-md p-2 mb-2"
                />
                <input
                  type="text"
                  id="description"
                  placeholder="Job Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="border rounded-md p-2 mb-4"
                />
                {/* Add more input fields for job data as needed */}
                <button type='submit' className="bg-[#11998e] text-white py-2 px-4 rounded-md">Create Job</button>
                <button type='button' className="ml-2 py-2 px-4 rounded-md" onClick={() => setIsModalOpen(false)}>Cancel</button>
              </form>
            </div>
          </div>
          ////////////////

        </>
      )}
    </div>
  );
};

export default Welcome;
