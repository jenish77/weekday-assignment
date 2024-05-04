import React from "react";

function JobDetails({jobDetailsFromCompany}) {
  return (
    <>
      <div className="card-job-details">
        <h3>About Comapany:</h3>
        <p>{jobDetailsFromCompany}</p>
      </div>
    </>
  )
}

export default JobDetails;
