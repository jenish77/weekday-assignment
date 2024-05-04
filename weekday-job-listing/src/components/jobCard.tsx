import React from "react";
import JobDetails from "./jobDetails";
import JobCTA from "./jobCTA";
import JobCompany from './jobCompany';
import "../styles/jobCard.css";

const JobCard = ({ job }) => {
  const {
    companyName,
    jobRole,
    minExp,
    maxExp,
    jobDetailsFromCompany,
    location,
    logoUrl,
    maxJdSalary,
    minJdSalary,
    salaryCurrencyCode,
    jdLink,
  } = job;

  return (
    <div className="card-container">
      <JobCompany
        logo={logoUrl}
        companyname={companyName}
        role={jobRole}
        location={location}
       
        minsalary={minJdSalary}
        maxsalary={maxJdSalary}
      />
      <JobDetails jobDetailsFromCompany={jobDetailsFromCompany}/>
      <JobCTA 
       minexp={minExp}
       maxexp={maxExp}
       jobLink={jdLink}
       />
    </div>
  );
};

export default JobCard;
