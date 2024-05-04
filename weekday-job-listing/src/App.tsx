import {} from "react";
import Filter from "./components/filter";
import JobListing from "./components/jobListing";
import './styles/global.css'

function App() {
  return (
    <>
      <div>
        <Filter/>
      </div>
      <div className="card">
        <JobListing/>
      </div>
    </>
  );
}

export default App;
