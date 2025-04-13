// App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import CategoryCard from "./components/CategoryCard";
import { getCategories } from "./services/api";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import "./App.css";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (auth) {
      // Fetch categories if authenticated
      getCategories()
        .then((response) => {
          setCategories(response.data);
        })
        .catch((error) => console.error("Error fetching categories:", error));
    }
  }, [auth]);

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Public Routes */}
          <Route exact path="/login">
            <LoginPage setAuth={setAuth} />
          </Route>

          {/* Protected Route for Dashboard */}
          <ProtectedRoute
            path="/dashboard"
            component={() => <DashboardPage categories={categories} />}
            auth={auth}
          />

          {/* Fallback route for unauthorized access */}
          <Route path="*">
            <LoginPage setAuth={setAuth} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
