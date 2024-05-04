import {} from "react";
import "./App.css";
import Filter from "./components/filter";
import JobListing from "./components/jobListing";

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
