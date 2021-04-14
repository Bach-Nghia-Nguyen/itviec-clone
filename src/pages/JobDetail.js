import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import JobDetailCard from "../components/JobDetailCard";

// const backEndUrl = process.env.REACT_APP_BACKEND_SERVER_URL;

const JobDetail = () => {
  const [jobDetail, setJobDetail] = useState(null);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getSingleJob = async () => {
      try {
        // let url = `${backEndUrl}/jobs/${id}`;
        let url = `https://my-json-server.typicode.com/Bach-Nghia-Nguyen/itviec-clone/jobs/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setJobDetail(data);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleJob();
  }, [id]);

  return (
    <div className="job-detail-page">
      <JobDetailCard
        title={jobDetail?.title}
        company_logo={jobDetail?.img}
        tags={jobDetail?.tags}
        city={jobDetail?.city}
        district={jobDetail?.district}
        salary={jobDetail?.salary}
        time={jobDetail?.time}
        benefits={jobDetail?.benefits}
        description={jobDetail?.description}
      />
    </div>
  );
};

export default JobDetail;
