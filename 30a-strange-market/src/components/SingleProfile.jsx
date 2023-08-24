import { useSelector, useDispatch } from "react-redux";
import { fetchProfile, deletePost } from "./API/ajax-helpers";
import { setProfile } from "../redux/index";
import React, { useState } from "react";

export default function ProfileLog() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const profile = useSelector((state) => state.auth.profile);
  const token = useSelector((state) => state.auth.token);
  const [isOpen, setIsOpen] = useState(true);
  const [posts, postList] = useState([]);
  console.log(setProfile(profile));

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
    <div className="profile-container">
      <h2 className="profile-header">Your Posts</h2>
      <div>
        <button className="profile-log-button" onClick={handleToggleDropdown}>
          {isOpen ? "Hide Logs" : "Show Logs"}
        </button>
        {isOpen && (
          <ul className="profile-log-list">
            {profile.posts.map((post) => (
              <li className="profile-log-item" key={posts.post}>
                Posts: {post.posts}, Location: {post.location}, Messages:
                {post.messages}, User Id: {post.author}, {post.username} User
                Name:
                {post._id}, User Cohort: {post.cohort}, Will Deliver:
                {post.willdeliver}, Active: {post.active}, Title: {post.title},
                Description: {post.description}, Price: {post.price}, Created
                At: {post.createdAt}, UpdatedAt: {post.updatedAt},
                <button className="delete" onClick={() => deletePost(post._id)}>
                  Delete post
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
