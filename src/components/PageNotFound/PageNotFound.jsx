import React from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className="container">
      <h1>Sorry, the page you are looking for does not exist.</h1>
      <Link to="/">Redirect to Home Page</Link>
    </div>
  );
};
