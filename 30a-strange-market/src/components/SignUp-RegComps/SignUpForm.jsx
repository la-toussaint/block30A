import { react, useState } from "react";
import { setToken } from "../../redux";
const COHORT_NAME = "2306-GHP-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
export const BASE_URL_USER_REG = `${BASE_URL}/users/register`;

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(BASE_URL_USER_REG, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      });
      const data = await response.json();
      console.log("data: ", data);
      setToken(data.data.token);
      setSuccess(data.data.message);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <form className="sign-up-form" onSubmit={registerUser}>
        <label>
          Username: {""} <br />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
        </label>
        <label>
          Password: {""} <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {!(username.length >= 8) && (
        <p style={{ color: "white", backgroundColor: "#0072b5" }}>
          No more than an 8-character password please.
        </p>
      )}
    </>
  );
}
