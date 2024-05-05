import JobDetails from "./jobDetails";
import JobCTA from "./jobCTA";
import JobCompany from './jobCompany';
import "../styles/jobCard.css";

const JobCard = ({ job }: { job: any }) => {
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
        salaryCurrencyCode={salaryCurrencyCode}
        minsalary={minJdSalary}
        maxsalary={maxJdSalary}
        maxexp={maxExp}
        minexp={minExp}
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
