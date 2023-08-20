import { useState } from "react";

export default function NewPostForm() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [submitted, setSubmitted] = useState(false)
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the data from state
    console.log({ name, id, breed, status, image });
    // authenticate();
    // resetForm();
    setSubmitted(true)
  }

  function resetForm() {
    setName("");
    setId("");
    setBreed("");
    setStatus("");
    setImage("");
    setSubmitted(false)
  }
  return (
    <>
      {  submitted && <h1>Your puppy has been added - Good luck!</h1> }
      <form class ="newPost-form" onSubmit={handleSubmit}>
        <h3>Add A New Post Here:</h3>
        <label>
          Name:{" "}
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <hr />
        <label>
          Id Number:{" "}
          <input
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </label>
        <hr />
        <label>
          Breed:{" "}
          <input
            value={breed}
            onChange={() => {
              setBreed(e.target.value);
            }}
          />
        </label>
        <hr />
        <label>
          Status:{" "}
          <label>
            <input
              value={status}
              onChange={() => {
                setStatus(e.target.value);
              }}
            />
          </label>
        </label>
        <hr />
        <label>
          Image:{image}
          <label>
            <input
              value={image}
              onChange={() => {
                setImage(e.target.value);
              }}
            />
          </label>
        </label>
        <hr />
        <button class="reset" type="reset" onClick={resetForm}>
          Reset form
        </button>
        <button class="submit" type="submit">Submit form</button>
      </form>
    </>
  );
}
