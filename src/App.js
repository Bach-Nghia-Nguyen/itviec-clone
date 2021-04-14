import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/Login";
import JobsList from "./pages/JobsList";
import JobDetail from "./pages/JobDetail";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const admin = {
    name: "Nghia",
    email: "nghia@gmail.com",
    password: "061296",
  };

  let history = useHistory();

  const [user, setUser] = useState({
    email: "",
    name: "",
    isAuthenticated: false,
  });
  const [error, setError] = useState("");

  const login = (details) => {
    console.log(details);

    if (details.email === admin.email && details.password === admin.password) {
      console.log("Log in successfully");

      setUser({
        name: admin.name,
        email: admin.email,
        isAuthenticated: true,
      });
      setError("");
      history.push(`/jobs`);
    } else {
      setError("Wrong username or password!");
    }
  };

  const logout = () => {
    console.log("Log out");
    setUser({ name: "", email: "", isAuthenticated: false });
  };

  const ProtectedRoute = (props) => {
    if (user.isAuthenticated === true) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route
          path="/login"
          exact
          component={() => (
            <Login user={user} logout={logout} login={login} error={error} />
          )}
        />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/jobs" exact component={JobsList} />

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
