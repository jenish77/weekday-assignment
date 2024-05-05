import "../styles/jobCompany.css";

const jobCompany = (props: any) => {
  const {
    logo,
    companyname,
    role,
    location,
    minexp,
    maxexp,
    minsalary,
    maxsalary,
    salaryCurrencyCode,
  } = props;
  return (
    <div className="card-job">
      <div className="card-job-days">
        <h6>⏳ Posted 5 days ago</h6>
      </div>
      <div className="card-job-company">
        <div className="card-job-company__logo">
          {logo && <img src={logo} alt="company logo" />}
        </div>
        <div className="card-job-company-overview">
          <h3 className="card-job-company-name">{companyname}</h3>
          <h2 className="card-job-comapny-role">{role}</h2>
          <p className="card-job-location-exp">
            {location} {minexp && maxexp ? `| Exp:${minexp}-${maxexp} years` : ""}
          </p>
        </div>
      </div>
      <p className="card-job-salary">
      Estimated Salary: {minsalary && maxsalary ? `${salaryCurrencyCode} ${minsalary}K-${maxsalary}K LPA ✅` : 'NA'}
      </p>


      </div>
    // </div>
  );
};

export default jobCompany;
