import { useState } from "react";

export default function NewPostForm() {
  const [postAuthorUsername, setPostAuthorUsername] = useState("");
  const [postAuthor_Id, setPostAuthor_Id] = useState("");
  const [postCohort, setPostCohort] = useState("");
  const [postCreatedAt, setPostCreatedAt] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postLocation, setPostLocation] = useState("");
  const [postMessage, setPostMessage] = useState("");
  const [postPrice, setPostPrice] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postWillDeliver, setPostWillDeliver] = useState("");
  const [post_Id, setPost_Id] = useState("");
  const [postUpdatedAt, setPostUpdatedAt] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the data from state
    console.log({
      postAuthorUsername,
      postAuthor_Id,
      postCohort,
      postTitle,
      postPrice,
    });
    // authenticate();
    // resetForm();
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
    setPostWillDeliver("");
    setPost_Id("");
    setPostUpdatedAt("");
    setSubmitted(false);
  }
  return (
    <>
      {submitted && <h1>Your post has been added - Happy shopping!</h1>}
      <form class="newPost-form" onSubmit={handleSubmit}>
        <h3>Add A New Post Here:</h3>
        <label>
          Author Username:{" "}
          <input
            value={postAuthorUsername}
            onChange={(e) => {
              setPostAuthorUsername(e.target.value);
            }}
          />
        </label>
        <hr />
        <label>
          Author Id:{" "}
          <input
            value={postAuthor_Id}
            onChange={(e) => {
              setPostAuthor_Id(e.target.value);
            }}
          />
        </label>
        <hr />
        <label>
          Post Message:{" "}
          <input
            value={postMessage}
            onChange={() => {
              SetPostMessage(e.target.value);
            }}
          />
        </label>
        <hr />
        <label>
          Post Cohort:{" "}
          <label>
            <input
              value={postCohort}
              onChange={() => {
                setStatus(e.target.value);
              }}
            />
          </label>
        </label>
        <hr />
        <label>
          Post Price:{" "}
          <label>
            <input
              value={postPrice}
              onChange={() => {
                setImage(e.target.value);
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
              onChange={() => {
                setImage(e.target.value);
              }}
            />
          </label>
        </label>
        <hr />
        <label>
          Post Description:{" "}
          <label>
            <input
              value={postDescription}
              onChange={() => {
                setImage(e.target.value);
              }}
            />
          </label>
        </label>
        <hr />
        <label>
          Post Location:{" "}
          <label>
            <input
              value={postLocation}
              onChange={() => {
                setImage(e.target.value);
              }}
            />
          </label>
        </label>
        <hr />
        <label>
          Will Deliver:{" "}
          <label>
            <input
              value={postWillDeliver}
              onChange={() => {
                setImage(e.target.value);
              }}
            />
          </label>
        </label>
        <hr />
        <label>
          Post Created At:{""}
          <label>
            <input
              value={postCreatedAt}
              onChange={() => {
                setImage(e.target.value);
              }}
            />
          </label>
        </label>
        <hr />
        <label>
          Post Updated At:{""}
          <label>
            <input
              value={postUpdatedAt}
              onChange={() => {
                setImage(e.target.value);
              }}
            />
          </label>
        </label>
        <hr />
        <label>
          Post Id:{" "}
          <label>
            <input
              value={post_Id}
              onChange={() => {
                setImage(e.target.value);
              }}
            />
          </label>
        </label>
        <hr />{" "}
        <button class="reset" type="reset" onClick={resetForm}>
          Reset form
        </button>
        <button class="submit" type="submit">
          Submit form
        </button>
      </form>
    </>
  );
}
