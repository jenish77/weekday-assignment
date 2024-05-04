import React, { useEffect, useState } from 'react'
import JobCard from './jobCard'
import { getJobs } from '../api/jobs'

const jobListing = () => {
const [jobList, setJobList] = useState([])
  useEffect(()=>{
    fetchJobs()
  },[])
const fetchJobs = async () => {
  let jobList = await getJobs();
  setJobList(jobList.jdList)
}

  return (
    <div>
      {
        jobList.map((job:any, index:any) => {
          return <JobCard key={index} job={job} />
        })
      }
    </div>
  )
}

export default jobListing
