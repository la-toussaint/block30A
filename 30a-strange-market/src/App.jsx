import React from "react";
import Authenticate from "./components/SignUp-RegComps/Authenticate";
import SignUpForm from "./components/SignUp-RegComps/SignUpForm";
import VerificationPage from "./components/LogInComps/Verification";
import { Messages } from "./components/Messages";
import NewPost from "./components/NewPost";
import AllCards from "./components/AllCards";
// @reduxjs/toolkit
import "./App.css";
import { Routes, Route } from "react-router-dom";

// import { SingleUser } from "./API/ajax-helpers";
import NavBar from "./components/NavBar";

const Home = ({ message, onMsgClose }) => {
  return (
    <>
      <AllCards />
      {message && <Messages message={message} onClose={onMsgClose} />}
    </>
  );
};
export default function App() {
  const [users, setUsers] = React.useState([
    { id: 1, name: "Name1" },
    { id: 2, name: "Name2" },
    { id: 3, name: "Name3" },
  ]);

  const [token, setToken] = React.useState(null);
  const [message, setMessage] = React.useState(null);

  return;
  <>
    <NavBar />
    <Routes>
      <Route
        path="/"
        element={<Home message={message} onMsgClose={setMessage} />}
      />
      <Route path="/new-post-form" element={<NewPost />} />
      {/* </AuthRoute> */}
      <Route path="/all-cards" element={<AllCards />} />
      {/* <Route path="/users/:userId" element={<RenderSelectedUser users={users} />} /> */}
      <Route
        path="/login"
        element={
          <VerificationPage setToken={setToken} setMessage={setMessage} />
        }
      />
      <Route path="/register" element={<SignUpForm users={users} />} />
    </Routes>
  </>;
}
