import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../../feature/joblistSlice';
import JobCard from '../jobCard';
import "../../styles/joblist.css";

const JobList: React.FC = React.memo(() => {
    
    let { jobs, loading, error } = useSelector((state: any) => state.jobList);
    const dispatch = useDispatch();

    // State variables for filter values
    const [offset, setOffset] = useState<number>(0); // Initial offset is 0
    const [jobRoleFilter, setJobRoleFilter] = useState<string>('');
    const [companyNameFilter, setCompanyNameFilter] = useState<string>('');
    const [locationFilter, setLocationFilter] = useState<string>('');
    const [experienceFilter, setExperienceFilter] = useState<number | null>(null);
    const [salaryFilter, setSalaryFilter] = useState<number | null>(null);
    const [filterchange, setFilterChange] = useState<boolean>(false);
    const observer = useRef<IntersectionObserver | null>(null);
    const lastJobCardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (filterchange) {
            setOffset(0);
            lastJobCardRef.current = null;
            jobs = []
        }
        dispatch(fetchJobs(offset) as any);
        
        
    }, [dispatch, offset,filterchange]);

    useEffect(() => {
        if (filterchange) {
            setOffset(0);
            jobs = []
        }
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                handleLoadMore();
            }
        });

        if (lastJobCardRef.current) {
            observer.current.observe(lastJobCardRef.current);
        }

        return () => {
            if (observer.current && lastJobCardRef.current) {
                observer.current.unobserve(lastJobCardRef.current);
            }
        };
    }, [jobs, loading, offset,filterchange]); 
    

    const handleLoadMore = () => {
        setOffset(offset + 9); // Increment offset by 9 for the next page
    };

    const handleJobRoleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setJobRoleFilter(e.target.value);
        setFilterChange(true)
    };

    const handleCompanyNameFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCompanyNameFilter(e.target.value);
        setFilterChange(true)
    };

    const handleLocationFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLocationFilter(e.target.value);
        setFilterChange(true)
    };

    const handleExperienceFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setExperienceFilter(e.target.value === '' ? null : parseInt(e.target.value));
        setFilterChange(true)
    };

    const handleSalaryFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSalaryFilter(e.target.value === '' ? null : parseInt(e.target.value));
        setFilterChange(true)
    };

    // Memoize filter function to prevent unnecessary re-computations
    const filterJobs = useMemo(() => (job: any): boolean => {
        const matchesJobRole = job.jobRole.toLowerCase().includes(jobRoleFilter.toLowerCase());
        const matchesCompanyName = job.companyName.toLowerCase().includes(companyNameFilter.toLowerCase());
        const matchesLocation = job.location.toLowerCase().includes(locationFilter.toLowerCase());
        const withinExperienceRange = experienceFilter === null || (job.minExp <= experienceFilter && job.maxExp >= experienceFilter);
        const withinSalaryRange = salaryFilter === null || (job.minJdSalary !== null && job.minJdSalary <= salaryFilter && job.maxJdSalary >= salaryFilter);
        return matchesJobRole && matchesCompanyName && matchesLocation && withinExperienceRange && withinSalaryRange;
    }, [jobRoleFilter, companyNameFilter, locationFilter, experienceFilter, salaryFilter,filterchange]);

    return (
        <div className='container'>
            <div className='row'>
                <select
                    className='filter-select'
                    value={jobRoleFilter}
                    onChange={handleJobRoleFilterChange}
                >
                    <option value="">Select Job Role</option>
                    {jobs.map((job:any) => job.jobRole).filter((value:any, index:any, self:any) => self.indexOf(value) === index).map((jobRole:any, index:any) => (
                        <option key={index} value={jobRole}>{jobRole}</option>
                    ))}
                </select>
                <select
                    className='filter-select'
                    value={companyNameFilter}
                    onChange={handleCompanyNameFilterChange}
                >
                    <option value="">Select Company Name</option>
                    {jobs.map((job:any) => job.companyName).filter((value:any, index:any, self:any) => self.indexOf(value) === index).map((companyName:any, index:any) => (
                        <option key={index} value={companyName}>{companyName}</option>
                    ))}
                </select>
                <select
                    className='filter-select'
                    value={locationFilter}
                    onChange={handleLocationFilterChange}
                >
                    <option value="">Select Location</option>
                    {jobs.map((job:any) => job.location).filter((value:any, index:any, self:any) => self.indexOf(value) === index).map((location:any, index:any) => (
                        <option key={index} value={location}>{location}</option>
                    ))}
                </select>
                <select
                    className='filter-select'
                    value={experienceFilter || ''}
                    onChange={handleExperienceFilterChange}
                >
                    <option value="">Select Experience</option>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((experience, index) => (
                        <option key={index} value={experience}>{experience} years</option>
                    ))}
                </select>
                <select
                    className='filter-select'
                    value={salaryFilter || ''}
                    onChange={handleSalaryFilterChange}
                >
                    <option value="">Select Base Salary</option>
                    {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((salaryValue, index) => (
                        <option key={index} value={salaryValue}>{salaryValue}k USD</option>
                    ))}
                </select>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {jobs.filter(filterJobs).length === 0 && <p>No Jobs available for this category at the moment</p>}
            
            <div className='job-listing'>
                {jobs.filter(filterJobs).map((job:any, index:any) => {

                    if (index === jobs.filter(filterJobs).length - 1) {
                        
                        return (
                            <div ref={lastJobCardRef}>

                                <JobCard  key={job.jdUid} job={job} />
                            </div>
                        );
                    } 
                    else {
                        return <JobCard key={job.jdUid} job={job} />;
                    }
                })}
            </div>
            
        </div>
    );
});

export default JobList;
