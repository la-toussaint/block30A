import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfile } from "../API/ajax-helpers";
import { setToken, setProfile } from "../redux/index";

const ProfileLog = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const profile = useSelector((state) => state.auth.profile);
  const token = useSelector((state) => state.auth.token);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    const dispatch = useDispatch();
    if (isLoggedIn) {
      fetchProfile(token).then((data) => {
        dispatch(setProfile(data));
      });
      return (
        <div className="user-profile-container">
          <button className="profile-log-button" onClick={handleToggleDropdown}>
            {isOpen ? "Hide Logs" : "Show Logs"}
          </button>
          {isOpen && (
            <div className="profile-log-card" key={profile.index}>
              {profile.map((profile, index) => (
                <ReactCardFlip
                  flipDirection="horizontal"
                  isFlipped={isFlipped[profile.author.username]}
                >
                  Action: {profile.payload},
                  <div className="flip-card-front">
                    <div className="front-card-profile">
                      <div>Posts: {profile.posts.Number}</div>,
                      <div>Messages: {profile.messages.Number}</div>,
                      <div>Username: {profile.author.username}</div>,
                      <div>User Id: {profile.author._id}</div>,
                      <div>User Name: {profile.author.username}</div>,
                      <div>User Cohort: {profile.author.cohort}</div>,
                    </div>
                    <div className="front-profile-buttons">
                      <button
                        className="details"
                        onClick={() => handleClick(post.id)}
                      >
                        See Details
                      </button>
                      {isLoggedIn && (
                        <button
                          className="delete"
                          onClick={() => deletePost(profile.post.id)}
                        >
                          Delete post
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <button
                      className="flip"
                      onClick={() => handleClick(post.id)}
                    >
                      Flip over
                    </button>
                  </div>
                </ReactCardFlip>
              ))}
              )
            </div>
          )}
        </div>
      );
    }
  };
};

export default ProfileLog;
