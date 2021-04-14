import React from "react";
import coverPhoto from "../images/tech.jpeg";

// import { Link, useHistory } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <img src={coverPhoto} alt="Cover" className="headline-photo" />
    </div>
  );
};

export default HomePage;
