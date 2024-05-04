import { useState } from "react";

const Filter = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedNumberOfEmployees, setSelectedNumberOfEmployees] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedRemote, setSelectedRemote] = useState("");
  const [selectedMinimumBasePaySalary, setSelectedMinimumBasePaySalary] = useState("");

  const handleRoleChange = (event:any) => {
    setSelectedRole(event.target.value);
  };

  const handleNumberOfEmployeesChange = (event:any) => {
    setSelectedNumberOfEmployees(event.target.value);
  };

  const handleExperienceChange = (event:any) => {
    setSelectedExperience(event.target.value);
  };

  const handleRemoteChange = (event:any) => {
    setSelectedRemote(event.target.value);
  };

  const handleMinimumBasePaySalaryChange = (event:any) => {
    setSelectedMinimumBasePaySalary(event.target.value);
  };

  return (
    <div className="job-filter">
      <select title="Roles" name="Roles" id="" value={selectedRole} onChange={handleRoleChange}>
        <option value="">Select a Role</option>
        <option value="Developer">Developer</option>
        <option value="Designer">Designer</option>
        {/* Add more options as needed */}
      </select>

      <select name="Number Of Employee" value={selectedNumberOfEmployees} onChange={handleNumberOfEmployeesChange}>
        <option value="">Select Number Of Employee</option>
        <option value="1-10">1-10</option>
        <option value="11-50">11-50</option>
        {/* Add more options as needed */}
      </select>

      <select name="Experience" value={selectedExperience} onChange={handleExperienceChange}>
        <option value="">Select Experience</option>
        <option value="0-1 years">0-1 years</option>
        <option value="1-3 years">1-3 years</option>
        {/* Add more options as needed */}
      </select>

      <select name="Remote" value={selectedRemote} onChange={handleRemoteChange}>
        <option value="">Select Remote</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        {/* Add more options as needed */}
      </select>

      <select name="Minimum Base Pay Salary" value={selectedMinimumBasePaySalary} onChange={handleMinimumBasePaySalaryChange}>
        <option value="">Select Minimum Base Pay Salary</option>
        <option value="Less than $50,000">$0 - $50,000</option>
        <option value="$50,000 - $100,000">$50,000 - $100,000</option>
        {/* Add more options as needed */}
      </select>

      <input type="text" placeholder="Search Company Name" />
    </div>
  );
};

export default Filter;
