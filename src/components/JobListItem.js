import React from "react";
import { Badge } from "react-bootstrap";
import Moment from "react-moment";

const JobListItem = ({
  title,
  city,
  district,
  benefits,
  company_logo,
  isHotJob,
  salary,
  tags,
  time,
  showDetail,
}) => {
  return (
    <div className="center-this job-list-item" onClick={showDetail}>
      <img
        width={64}
        height={64}
        className="mr-3"
        src={company_logo}
        alt="Logo"
      />
      <div className=" info-section-left ml-5">
        <h5 className="mt-0">{title}</h5>
        <p>$ {salary}</p>

        <ul>
          {benefits ? (
            benefits.map((benefit) => <li>{benefit}</li>)
          ) : (
            <li>No specific benefit</li>
          )}
        </ul>

        {tags ? (
          tags.map((tag) => (
            <Badge className="tag-badge" pill variant="secondary">
              {tag}
            </Badge>
          ))
        ) : (
          <Badge pill variant="danger">
            No tag
          </Badge>
        )}
      </div>

      <div className="info-section-right">
        {isHotJob ? <div className="hot-job">Hot Job</div> : <></>}

        <div className="office-location">
          {city} <br />
          District {district}
        </div>

        <div className="post-time">
          <p>
            {" "}
            <Moment fromNow>{time}</Moment>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobListItem;
