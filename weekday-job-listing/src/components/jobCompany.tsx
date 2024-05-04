import React from 'react'

const jobCompany = (props) => {
  const {logo, companyname, role, location, minexp, maxexp, minsalary, maxsalary} = props;
  return (
    <div className="card-job">
      
      <div className="card-job-company">
        <div className="card-job-company__logo">{logo && <img src={logo} alt="company logo" />}</div>
        <div className="card-job-company-overview">
          <h3>{companyname}</h3>
          <h3>{role}</h3>
          <div className="card-job-location-exp">
            <h3>{location}</h3>
            <h3>{minexp}-{maxexp}</h3>
          </div>
        </div>
      </div>
      <div className="card-job-salary"><h3>Expected Salary:{minsalary}-{maxsalary}</h3></div>
    </div>
  );
}

export default jobCompany
