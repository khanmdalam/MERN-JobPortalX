import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
    const { allJobs, searchedQuery } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);

    useEffect(() => {
        if (searchedQuery) {
            const normalize = (value) => String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
            const normalizedQuery = normalize(searchedQuery);
            const parseSalaryTokenToNumber = (token = "") => {
                const cleaned = String(token).toLowerCase().replace(/\s+/g, "");
                const numericPart = parseFloat(cleaned.replace(/[^0-9.]/g, ""));
                if (Number.isNaN(numericPart)) return NaN;
                if (cleaned.includes("lakh")) return numericPart * 100000;
                if (cleaned.includes("k")) return numericPart * 1000;
                return numericPart;
            };
            const parseSalaryRange = (queryValue = "") => {
                const normalized = String(queryValue).toLowerCase().replace(/\s+/g, "");
                if (!(normalized.includes("k") || normalized.includes("lakh"))) return null;

                const parts = normalized.split("-");
                if (parts.length !== 2) return null;

                const min = parseSalaryTokenToNumber(parts[0]);
                const max = parseSalaryTokenToNumber(parts[1]);
                if (Number.isNaN(min) || Number.isNaN(max)) return null;

                return { min, max };
            };
            const salaryRange = parseSalaryRange(searchedQuery);
            const filteredJobs = allJobs.filter((job) => {
                const title = normalize(job?.title);
                const description = normalize(job?.description);
                const location = normalize(job?.location);
                const jobType = normalize(job?.jobType);
                const salary = Number(job?.salary);
                const salaryInRupees = Number.isNaN(salary)
                    ? NaN
                    : salary <= 1000
                        ? salary * 100000 // treat small values as LPA
                        : salary;
                const salaryMatches = salaryRange
                    ? !Number.isNaN(salaryInRupees) &&
                    salaryInRupees >= salaryRange.min &&
                    salaryInRupees <= salaryRange.max
                    : false;
                return title.includes(normalizedQuery) ||
                    description.includes(normalizedQuery) ||
                    location.includes(normalizedQuery) ||
                    jobType.includes(normalizedQuery) ||
                    salaryMatches
            })
            setFilterJobs(filteredJobs)
        } else {
            setFilterJobs(allJobs)
        }
    }, [allJobs, searchedQuery]);

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5 px-4 sm:px-6'>
                <div className='flex flex-col lg:flex-row gap-5'>
                    <div className='w-full lg:w-1/4'>
                        <FilterCard />
                    </div>
                    {
                        filterJobs.length <= 0 ? <span>Job not found</span> : (
                            <div className='flex-1 lg:h-[88vh] lg:overflow-y-auto pb-5'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
                                    {
                                        filterJobs.map((job) => (
                                            <motion.div
                                                initial={{ opacity: 0, x: 100 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -100 }}
                                                transition={{ duration: 0.3 }}
                                                key={job?._id}>
                                                <Job job={job} />
                                            </motion.div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>


        </div>
    )
}

export default Jobs