import React from "react";

import NotFoundImage from "../images/404-error.png";

const NotFoundPage = () => {
  return (
    <div className="text-center">
      <img src={NotFoundImage} alt="404" />
    </div>
  );
};

export default NotFoundPage;
