import React, { useState, useEffect } from "react";
import { useSelector, dispatch, useDispatch } from "react-redux";
import { fetchProfile } from "./API/ajax-helpers";

const dispatch = useDispatch();
const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
const profile = useSelector((state) => state.auth.profile);
const [setProfile] = useState(null);

const ProfileLog = () => {
  // Get the profiles from the Redux store
  React.useEffect(() => {
    if (isLoggedIn) {
      fetchProfile(token).then((data) => {
        dispatch(setProfile(data));
      });
    }
  }, [isLoggedIn]);

  {
    isOpen ? "Hide Logs" : "Show Logs";
  }
  // State variable to track whether the log is open or closed

  return (
    <div className="user-profile-container">
      {profile.map((data) => (
        <div className="profile-card" key={profile.data}>
          {isOpen && (
            <ul className="profile-log-data">
              {profile.map((profile, index) => (
                <li className="profile-log-item" key={profile.data._id}>
                  Action: {profile.action}, Id: {profile.data.username}, Posts:{" "}
                  {profile.data.posts}, Messages: {profile.data.messages},
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      ;
    </div>
  );
};

export default ProfileLog;