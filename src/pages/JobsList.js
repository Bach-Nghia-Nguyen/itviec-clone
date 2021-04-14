import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import JobListItem from "../components/JobListItem";

// const baseUrl = process.env.REACT_APP_BACKEND_SERVER_URL;

const JobsList = () => {
  const [jobsList, setJobsList] = useState([]);
  const history = useHistory();

  const handleClickDetail = (job_id) => {
    history.push(`/jobs/${job_id}`);
  };

  useEffect(() => {
    const getJobs = async () => {
      try {
        // let url = `${baseUrl}/jobs`;
        let url = `https://my-json-server.typicode.com/Bach-Nghia-Nguyen/itviec-clone/jobs`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setJobsList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getJobs();
  }, []);

  return (
    <div>
      <ul>
        {jobsList.map((job) => (
          <JobListItem
            key={job.id}
            title={job.title}
            city={job.city}
            district={job.district}
            salary={job.salary}
            benefits={job.benefits}
            company_logo={job.img}
            tags={job.tags}
            isHotJob={job.isHotjob}
            time={job.time}
            showDetail={() => handleClickDetail(job.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default JobsList;
