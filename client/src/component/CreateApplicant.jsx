import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useCreateCandidateMutation } from '../Features/candidate/candidateApi';
import { useAllJobsQuery } from '../Features/job/jobApi';

const CreateApplicant = () => {
  const navigate = useNavigate();

  const { data: allJobs } = useAllJobsQuery();
  const [createCandidate, { data }] = useCreateCandidateMutation();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [jobId, setJobId] = useState("");

  const handleCreateApplicant = (e) => {
    e.preventDefault();

    createCandidate({
      name,
      gender,
      status,
      jobId
    });
  }

  const handleCancel = () => {
    navigate("/");
  };

  useEffect(() => {
    if (data) {
      toast.success('Successfully created')
      navigate("/application");
    }
  }, [data, navigate]);

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div className="bg-white p-4 rounded-md w-96">
          <h2 className="text-xl font-bold mb-4">Create New Applicant</h2>
          <form onSubmit={handleCreateApplicant} className="flex flex-col gap-2">
            {/* Form inputs for editing candidate data */}
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-md p-2 mb-2"
            />
            <input
              type="text"
              id="gender"
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="border rounded-md p-2 mb-2"
            />
            <input
              type="text"
              id="status"
              placeholder="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border rounded-md p-2 mb-2"
            />
            <select
              id="job"
              name="job"
              value={jobId}
              onChange={(e) => setJobId(e.target.value)}
              className="border rounded-md p-2 mb-2"
            >
              <option value="">Select a Job</option>
              {allJobs &&
                allJobs.map((job) => (
                  <option key={job.id} value={job._id}>
                    {job.title}
                  </option>
                ))}
            </select>
            <div className="flex justify-between">
              <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Save</button>
              <button type="button" onClick={handleCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateApplicant;
