import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = (props) => {
  const [user, setUser] = useState({ isAuthenticated: false });

  if (user.isAuthenticated === true) {
    return <Route {...[props]} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default ProtectedRoute;
