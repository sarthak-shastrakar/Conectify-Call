import React, { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Navbar from "./Navbar.jsx";
import "../styles/Profile.css";

function Profile() {
  const { userData, getProfile } = useContext(AuthContext);

  useEffect(() => {
    getProfile();
  }, []);

  if (!userData) {
    return (
      <div className="profile-loading">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="profile-page">
      <Navbar />

      <div className="profile-container">
        <h1 className="profile-title">Profile</h1>

        <div className="profile-card">
          <div className="profile-row">
            <span className="label">Name</span>
            <span className="value">{userData.name}</span>
          </div>

          <div className="profile-row">
            <span className="label">Username</span>
            <span className="value">{userData.username}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
