import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/">Register</Link>
      <Link to="/">Log In</Link>

      <Link to="/all-posts">All Posts</Link>
      <Link to="/">Single User</Link>
      <Link to="/new-post-form">New Post</Link>
    </div>
  );
}
