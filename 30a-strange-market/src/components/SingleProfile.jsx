import { useSelector, useDispatch } from "react-redux";
import { fetchProfile } from "../API/ajax-helpers";
import { setProfile } from "../redux/index";
import React, { useState } from "react";

export default function ProfileLog() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const profile = useSelector((state) => state.auth.profile);
  const token = useSelector((state) => state.auth.token);
  const [isOpen, setIsOpen] = useState(true);
  console.log(setProfile(profile));

  
  const [users, setUsers] = React.useState([
    { id: 1, name: "Posts" },
    { id: 2, name: "Messages" },
    { id: 3, name: "Will Deliver" },
    { id: 3, name: "Active" },
    { id: 3, name: "Username" },
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
              <li className="profile-log-item" key={post.post}>
                Posts: {post.posts}, Location: {post.location}, Messages:
                {post.messages}, User Id: {post.author}, {post.author.username} User Name:
                {post.messages.username}, User Cohort: {post.cohort}, Will Deliver:
                {post.willdeliver}, Active: {post.active}, Title: {post.title},
                Description: {post.description}, Price: {post.price}, Created
                At: {post.createdAt}, UpdatedAt: {post.updatedAt},
                <button className="delete" onClick={() => deletePost(post._id)}>
                  Delete post
                </button>
              </li>
            ))}
          </ul>
          <div>
            <p>Messages Username console.log(messages.username)</p>
          </div>
          )
        </div>
      )}
    </div>
  );
}
