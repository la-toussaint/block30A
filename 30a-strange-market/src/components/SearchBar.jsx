import { useState, useEffect } from "react";
import { fetchAllPosts } from "../API/ajax-helpers";
// import PostListName from "./PostListName";
// import CreatePostForm from "./CreatePostForm";

export default function SearchBar({ setSearchParam }) {
  const [error, setError] = useState(null);
  const [val, setValue] = useState("");

  const handleChange = (searchParam) => {
    setValue(searchParam);
    setSearchParam(searchParam);
  };

  return (
    <div>
      <div className="search-bar">
        <label>
          Search:{" "}
          <input
            type="text"
            placeholder="search"
            onChange={(e) => handleChange(e.target.value.toLowerCase())}
            value={val}
          />
        </label>
      </div>
    </div>
  );
}
