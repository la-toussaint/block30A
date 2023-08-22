import { useState } from "react";
import { makePost } from "../API/ajax-helpers";
import { useSelector } from "react-redux";

export default function NewPostForm() {
  const token = useSelector((state) => state.auth.token);
  const [postAuthorUsername, setPostAuthorUsername] = useState("");
  const [postAuthor_Id, setPostAuthor_Id] = useState("");
  const [postCohort, setPostCohort] = useState("");
  const [postCreatedAt, setPostCreatedAt] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postLocation, setPostLocation] = useState("");
  const [postMessage, setPostMessage] = useState("");
  const [postPrice, setPostPrice] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postWillDeliver, setPostWillDeliver] = useState(false);
  const [post_Id, setPost_Id] = useState("");
  const [postUpdatedAt, setPostUpdatedAt] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the data from state
    console.log({
      postAuthorUsername,
      postAuthor_Id,
      postCohort,
      postTitle,
      postDescription,
      postPrice,
      postWillDeliver,
    });
    await makePost(
      token,
      postTitle,
      postDescription,
      postPrice,
      postWillDeliver
    );
    resetForm();
    setSubmitted(true);
  }

  function resetForm() {
    setPostAuthorUsername("");
    setPostAuthor_Id("");
    setPostCohort("");
    setPostCreatedAt("");
    setPostDescription("");
    setPostLocation("");
    setPostMessage("");
    setPostPrice("");
    setPostTitle("");
    setPostWillDeliver(false);
    setPost_Id("");
    setPostUpdatedAt("");
    setSubmitted(false);
  }
  return (
    <>
      {submitted && <h1>Your post has been added - Happy shopping!</h1>}
      <form className="newPost-form" onSubmit={handleSubmit}>
        <h3>Add A New Post Here:</h3>
        <label>
          Post Message:{" "}
          <input
            value={postMessage}
            onChange={(e) => {
              setPostMessage(e.target.value);
            }}
          />
        </label>
        <hr />

        <label>
          Post Price:{" "}
          <label>
            <input
              value={postPrice}
              onChange={(e) => {
                setPostPrice(e.target.value);
              }}
            />
          </label>
        </label>
        <hr />
        <label>
          Post Title:{" "}
          <label>
            <input
              value={postTitle}
              onChange={(e) => {
                setPostTitle(e.target.value);
              }}
            />
          </label>
        </label>
        <hr />
        <label>
          Post Description:{" "}
          <input
            value={postDescription}
            onChange={(e) => {
              setPostDescription(e.target.value);
            }}
          />
        </label>
        <hr />
        <div>
          <label>
            Will Deliver:{" "}
            <input
              type="checkbox"
              value={postWillDeliver}
              onChange={(e) => {
                setPostWillDeliver(e.target.value);
              }}
            />
          </label>
        </div>
        <hr />
        <div>
          <button className="reset" type="reset" onClick={resetForm}>
            Reset form
          </button>
        </div>
        <div>
          <button className="submit" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </>
  );
}
