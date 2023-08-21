import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfile } from "../API/ajax-helpers";

const ProfileLog = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const profile = useSelector((state) => state.auth.profile);
  const token = useSelector((state) => state.auth.token);
  const [isOpen, setIsOpen] = useState(false);
  const [setProfile] = useState(null);
  const dispatch = useDispatch();

  const handleLoggedIn = () => {
    // ***TODO***
    // Toggle the isOpen state value when the button is clicked
  };

  if (isLoggedIn) {
    fetchProfile(token).then((data) => {
      dispatch(setProfile(data));
    });
  }

  // State variable to track whether the log is open or closed

  return (
    <div className="user-profile-container">
      {isLoggedIn}
      <button className="profile-log-button" onClick={handleToggleDropdown}>
        {isOpen ? "Hide Logs" : "Show Logs"}
      </button>
      <div className="profile-card">
        {isOpen && (
          <ul className="profile-log-data">
            {profile.map((profile, index) => (
              <li className="profile-log-item" key={index}>
                Action: {profile.action}, Id: {profile._id}, Posts:
                {profile.posts}, Messages: {profile.messages},
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default ProfileLog;
