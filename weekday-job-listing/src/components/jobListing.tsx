import JobCard from './jobCard';

import '../styles/jobListing.css';

const JobListing = ({ jobList }: { jobList: any[] }) => {
  return (
    <div className='job-listing'>
      {jobList.map((job:any, index:any) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default JobListing;
