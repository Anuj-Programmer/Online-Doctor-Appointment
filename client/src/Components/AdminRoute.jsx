import React from "react";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
    console.log('hello');
    
  const token = localStorage.getItem("token");
  const author = localStorage.getItem("author");

  if (!token || author !== "admin") {
    console.log('you arenot admin');
    
    // If not logged in or if the user is not an admin, redirect to the homepage
    return <Navigate to="/" />;
  }

  // Otherwise, show the children (admin page)
  return children;
}

export default AdminRoute;
