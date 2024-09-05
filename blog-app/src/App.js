import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogListingPage from "./BlogListingPage"; // Import the BlogListingPage component
import "./App.css";
import HomeComponent from "./HomeComponent";
import BlogCreate from "./BlogCreate";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<HomeComponent />} />
          <Route path="/blogs" element={<BlogListingPage />} />
          <Route path="/createblog" element={<BlogCreate />} />
          <Route path="/SignUp" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
