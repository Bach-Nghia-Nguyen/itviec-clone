import React from "react";

import Moment from "react-moment";
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const JobDetailCard = ({
  title,
  city,
  district,
  benefits,
  description,
  company_logo,
  salary,
  tags,
  time,
}) => {
  return (
    <div className="container-fluid job-detail-card">
      <div className="row">
        <div className="col-2">
          <img src={company_logo} alt="Logo" />
        </div>
        <div className="col-10 ">
          <h2>{title}</h2>

          {tags ? (
            tags.map((tag) => (
              <Badge className="tag-badge" variant="secondary">
                {tag}
              </Badge>
            ))
          ) : (
            <Badge pill variant="danger">
              No tag
            </Badge>
          )}

          <div className="basic-job-info">
            <span>
              <FontAwesomeIcon className="mr-3" icon={faDollarSign} /> {salary}
            </span>{" "}
            <br />
            <span>
              <FontAwesomeIcon className="mr-3" icon={faMapPin} /> {city}{" "}
              District {district}
            </span>{" "}
            <br />
            <span>
              <FontAwesomeIcon className="mr-3" icon={faCalendar} />{" "}
              <Moment fromNow>{time}</Moment>{" "}
            </span>
          </div>

          <div className="job-benefits">
            <h2>Benefits</h2>
            <ul>
              {benefits ? (
                benefits.map((benefit) => <li>{benefit}</li>)
              ) : (
                <li>No specific benefit</li>
              )}
            </ul>
          </div>

          <div className="job-description">
            <h2>Description</h2>
            <p>{description}</p>
          </div>

          <button type="button" class="btn btn-danger apply-button">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailCard;
