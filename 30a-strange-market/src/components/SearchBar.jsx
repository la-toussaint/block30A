import { useEffect, useState } from "react";
import { BASE_URL_POSTS } from "../API";

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL_POSTS);
        const result = await response.json();

        const posts = result.data.posts.filter((post) => {
          if (value === "") {
            return true;
          }
          return (
            post.title.toLowerCase().includes(value.toLowerCase()) ||
            post.description.includes(value)
          );
        });
        onSearch(posts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [value]);

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search data..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
