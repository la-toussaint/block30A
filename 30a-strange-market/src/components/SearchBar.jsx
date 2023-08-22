import { useEffect, useState } from "react";
import { BASE_URL_POSTS } from "../API";

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL_POSTS);
        const result = await response.json();
      } catch (error) {
        console.error(error);

        const posts = result.data.posts.filter(
          (post) => {
            if (value === "") {
              return true;
            }
            return (
              post.title.toLowerCase().includes(value.toLowerCase()) ||
                post.description.toLowerCase().includes(value.toLowerCase()) ||
                post.username.toLowerCase().includes(value.toLowerCase()) ||
                post.userId.toLowerCase().includes(value.toLowerCase()) ||
                post.cohort.toLowerCase().includes(value.toLowerCase()) ||
                post.createdAt.toLowerCase().includes(value.toLowerCase()) ||
                post.location.toLowerCase().includes(value.toLowerCase()) ||
                post.message.toLowerCase().includes(value.toLowerCase()) ||
                post.price.toLowerCase().includes(value.toLowerCase()) ||
                post.willDeliver.toLowerCase().includes(value.toLowerCase()) ||
                post.id.toLowerCase().includes(value.toLowerCase()) ||
                post.updatedAt.toLowerCase().includes(value.toLowerCase()),
              onSearch(posts)
            );
          },
          [value]
        );
      }
      fetchData();
    };
  });

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
