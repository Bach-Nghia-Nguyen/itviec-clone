import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/Login";
import JobsList from "./pages/JobsList";
import JobDetail from "./pages/JobDetail";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const ProtectedRoute = (props) => {
    const [user, setUser] = useState({ isAuthenticated: false });

    if (user.isAuthenticated === true) {
      return <Route {...[props]} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/jobs" exact component={JobsList} />
        {/* <Route path="/jobs/:id" exact component={JobDetail} /> */}
        <ProtectedRoute
          path="/jobs/:id"
          render={(props) => <JobDetail {...props} />}
        />
        <Route path="/" exact component={HomePage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
