import { useState, react } from "react";
import Authenticate from "./components/SignUp-RegComps/Authenticate";
import SignUpForm from "./components/SignUp-RegComps/SignUpForm";

// @reduxjs/toolkit
import "./App.css";
import { Routes, Route } from "react-router-dom";

import AllUsers from "./components/AllPosts";
import SingleUser from "./API/ajax-helpers";;
import NavBar from "./components/NavBar";

export default function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Name1" },
    { id: 2, name: "Name2" },
    { id: 3, name: "Name3" },
  ]);

  const [token, setToken] = useState(null);
  return (
    (
      <>
        <SignUpForm token={token} setToken={setToken} />
        <Authenticate token={token} setToken={setToken} />
      </>
    ),
    (
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/users" element={<AllUsers users={users} />} />
          <Route path="/users/:userId" element={<SingleUser users={users} />} />
        </Routes>
      </>
    )
  );
}
