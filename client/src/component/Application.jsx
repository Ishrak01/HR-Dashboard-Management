import React, { useEffect, useState } from 'react';
import toast from "react-hot-toast";
import { useAllCandidatesQuery, useDeleteCandidateMutation, useGetSingleCandidateQuery, useUpdateCandidateMutation } from '../Features/candidate/candidateApi';
import { useAllJobsQuery } from '../Features/job/jobApi';
import Menu from './Menu';

const Application = () => {


  const { data: allJobs } = useAllJobsQuery();
  const { data: allCandidates, isLoading: loading } = useAllCandidatesQuery()
  const [deleteCandidate, { isLoading: deleteLoading }] = useDeleteCandidateMutation()
  const [updateCandidate, { data: updated, isLoading: updateLoading }] = useUpdateCandidateMutation()
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editedCandidate, setEditedCandidate] = useState('')
  const { data: getSingleCandidate } = useGetSingleCandidateQuery(editedCandidate)



  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [job, setJob] = useState("");



  useEffect(() => {
    if (getSingleCandidate) {
      setName(getSingleCandidate.name)
      setGender(getSingleCandidate.gender)
      setStatus(getSingleCandidate.status)
      setJob(getSingleCandidate.job)


    }
  }, [getSingleCandidate])


  const toggleShowAllJobs = () => {
    setShowAllJobs(!showAllJobs);
  };
  const handleDeleteCandidate = (id) => {

    deleteCandidate(id); // Pass candidateId directly to the mutation hook

  };

  const toggleEditPopup = (candidateId) => {
    console.log(candidateId)
    setEditedCandidate(candidateId);
    setShowEditPopup(!showEditPopup);
  };


  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log("Edited Candidate ID:", editedCandidate);
    updateCandidate({
      id: editedCandidate,
      data: {
        name,
        gender,
        status,
        job
      }
    })

    setShowEditPopup(false); // Close the popup after editing
  };

  useEffect(() => {
    if (updated) {
      toast.success("Successfully Candidate data Updated")

    }
  }, [updated])



  if (loading || deleteLoading || updateLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-opacity-25 border-r-4 border-gray-300 h-16 w-16 mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-5 gap-2 mx-10'>
      <div className='min-h-[250px] row-span-3'>
        <Menu />
      </div>
      <div className='min-h-[50px] col-span-4 font-bold space-y-4 space-x-4'>
        <p>Application</p>
        <p>On going Recruitment</p>
        <button className='bg-[#b9f2e5] border-4 p-2' onClick={toggleShowAllJobs}>Click here for All Jobs</button>

        <div className=''>All  Candidates  BY  Name  Status  Job Title  Gender &  Actions</div>
      </div>

      {/* //////////// */}
      <div className='flex justify-between p-4'>

        <ul >
          <li className="flex justify-between mb-2 font-extrabold">
            <div className="w-48 bg-pink-600 p-2">Name</div>
            <div className="w-32 p-2 bg-[#b9f2e5]">Status</div>
            <div className="w-64 p-2 bg-blue-400">Job Title</div>
            <div className="w-32 p-2 bg-[#b9f2e5]">Gender</div>
            <div className="w-40 p-2 bg-green-500">Actions</div> {/* Actions column */}
          </li>
          {allCandidates && allCandidates.map(candidate => (
            <li key={candidate.id} className="flex items-center mb-2">
              <div className="w-48 bg-pink-600 font-bold p-2">{candidate.name}</div>
              <div className="w-32 bg-[#b9f2e5] font-bold p-2">{candidate.status}</div>
              <div className="w-64 p-2 font-bold bg-blue-400">{candidate.job.title}</div>
              <div className="w-32 bg-[#b9f2e5] font-bold p-2">{candidate.gender}</div>
              <div className="w-12 p-2 flex">
                <button onClick={() => toggleEditPopup(candidate._id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
                <button onClick={() => handleDeleteCandidate(candidate._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
              </div>
            </li>
          ))}
        </ul>

      </div>

      {/* Popup window for editing */}
      {showEditPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-xl font-bold">Edit Candidate</h2>
            <form onSubmit={handleEditSubmit} className='flex flex-col gap-2'>
              {/* Form inputs for editing candidate data */}

              <input
                type="text"
                id="name"
                placeholder="Job Title"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border rounded-md p-2 mb-2"
              />
              <input
                type="gender"
                id="title"
                placeholder="Job Title"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="border rounded-md p-2 mb-2"
              />
              <input
                type="text"
                id="status"
                placeholder="Job Title"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border rounded-md p-2 mb-2"
              />
              <select
                id="job"
                name="job"
                value={job}
                onChange={(e) => setJob(e.target.value)}
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

              <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Save</button>
              <button type="button" onClick={() => setShowEditPopup(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cancel</button>
            </form>
          </div>
        </div>
      )}

      {/* ////////// */}

      {/* Popup window */}
      {showAllJobs && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-xl font-bold">All Jobs</h2>
            <div>
              {/* Display all jobs */}
              {allJobs &&
                allJobs.map((job, index) => (
                  <div key={index} className="border bg-[#b9f2e5] border-gray-300 p-1 ] rounded-md mb-2">
                    {job.title}
                  </div>
                ))}
            </div>
            <button onClick={toggleShowAllJobs}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Application;
