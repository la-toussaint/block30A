import { useSelector, useDispatch } from "react-redux";
import { fetchProfile } from "../API/ajax-helpers";
import { setProfile } from "../redux/index";
import React, { useState } from "react";

export default function ProfileLog() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const profile = useSelector((state) => state.auth.profile);
  const token = useSelector((state) => state.auth.token);
  const [isOpen, setIsOpen] = useState(false);
  console.log(setProfile(profile));
  const [users, setUsers] = React.useState([
    { id: 1, name: "Name1" },
    { id: 2, name: "Name2" },
    { id: 3, name: "Name3" },
  ]);

  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log("isLoggedIn", isLoggedIn);
    if (isLoggedIn) {
      fetchProfile(token).then((data) => {
        console.log("foo", data);
        dispatch(setProfile(data));
      });
    }
  }, [isLoggedIn]);

  const handleToggleDropdown = () => {};

  return (
    <div className="user-profile-container">
      <button className="profile-log-button" onClick={handleToggleDropdown}>
        {isOpen ? "Hide Logs" : "Show Logs"}
      </button>
      {isOpen && (
        <div className="profile-log-card">
          <ul className="profile-log-list">
            {profile?.posts?.map((post) => (
              <li className="profile-log-item" key={post.id}>
                Posts: {post.posts}, Location: {post.location}, Messages:
                {post.messages.Number}, Username: {post.author.username}, User
                Id: {post.author._id}, User Cohort: {post.cohort},Will Deliver:
                {post.willdeliver},Active{post.active},
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// <ReactCardFlip
//   flipDirection="horizontal"
//   isFlipped={isFlipped[post.author.username]}
// >
//   Action: {profile.payload},
//   <div className="flip-card-front">
//     <div className="front-card-profile">
//       <div>Posts: {post.posts}</div>,
//       <div>Messages: {post.messages}</div>,
//       <div>Username: {post.author.username}</div>,
//       <div>User Id: {post.author._id}</div>,
//       <div>User Name: {post.author.username}</div>,
//       <div>User Cohort: {post.author.cohort}</div>,
//     </div>
//     <div className="front-profile-buttons">
//       <button
//         className="details"
//         onClick={() => handleClick(post.id)}
//       >
//         See Details
//       </button>
//       {isLoggedIn && (
//         <button
//           className="delete"
//           onClick={() => deletePost(profile.post.id)}
//         >
//           Delete post
//         </button>
//       )}
//     </div>
//   </div>
//   <div className="flip-card-back">
//     <button className="flip" onClick={() => handleClick(post.id)}>
//       Flip over
//     </button>
//   </div>
// </ReactCardFlip>

// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchProfile } from "../API/ajax-helpers";
// import { setToken, setProfile } from "../redux/index";

// const ProfileLog = () => {
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   const profile = useSelector((state) => state.auth.profile);
//   const token = useSelector((state) => state.auth.token);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggleDropdown = () => {
//     const dispatch = useDispatch();
//     if (isLoggedIn) {
//       fetchProfile(token).then((data) => {
//         dispatch(setProfile(data));
//       });
