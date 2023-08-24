// import { useState, useEffect } from "react";
import { fetchAllPosts } from "../api";
import PostListName from "./PostListName";
import CreatePostForm from "./CreatePostForm";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    async function getAllPosts() {
      const response = await fetchAllPosts();
      if (APIResponse.success) {
        setPosts(APIResponse.data.posts);
      } else {
        setError(APIResponse.error.message);
      }
    }
    getAllPosts();
  }, []);

  const postsToDisplay = searchParam
    ? posts.filter((post) => post.name.toLowerCase().includes(searchParam))
    : posts;
  return (
    <div>
      <div className="search-bar">
        <label>
          Search:{" "}
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          />
        </label>
      </div>
      <CreatePostForm className="search-bar-form" posts={posts} setPosts={setPosts} />
      {error && <p>{error}</p>}
      {postsToDisplay.map((post) => {
        return <PostListName key={post.id} post={post} />;
      })}
    </div>
  );
}
