import '../styles/jobDetails.css'
function JobDetails({jobDetailsFromCompany}: {jobDetailsFromCompany: string}) {
  return (
    <>
      <div className="card-job-details">
        <h3>About Comapany:</h3>
        <p>{jobDetailsFromCompany}</p>
      </div>
      <div className='card-job-details__view-more'><a href="#">View job</a></div>

    </>
  )
}

export default JobDetails;
