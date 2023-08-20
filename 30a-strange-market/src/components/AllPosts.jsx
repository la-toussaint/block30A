import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchAllPosts, deletePost } from "../API/ajaxHelpers";
import ReactCardFlip from "react-card-flip";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function AllPosts() {
  const [posts, postList] = useState([]);
  const [error, setError] = useState(null);
  const [isFlipped, setFlipped] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllPosts().then((result) => postList(result));
  }, []);

  const handleClick = (id) =>   {
    setFlipped({ ...isFlipped, [id]: !isFlipped[id] });
  return (
    <div class="post-card-container">
      {posts.map((post) => 
    <div class="post-card">
            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped[post.id]}>
            <div class="flip-card-front">
              <div>{post.name}</div>
                <img class="post-img" src={post.imageUrl} />
                <button class="details" onClick={() => handleClick(post.id)}>
                See Details
              </button>
              <button class="delete" onClick={() => deletePost(post.id)}>
                Delete post
              </button>
            </div>
            <div class="flip-card-back">
                <div>Post Name: {post.name}</div>
                <div>Post Breed: {post.breed}</div>
                <div>Post Status: {post.status}</div>
              <img class="post-img-back" src={post.imageUrl} />
              <button class="flip" onClick={() => handleClick(post.id)}>
                Flip over
                </button>
            </div> 
              function PostListName ({ post }) {
            <div class="stash">             
               return (
                <h3>{post.name}</h3>
                <button class="stash faves"
                 onClick={() => {
                navigate(`/${post.id}`);
                }}>See Your Favorite Posts Here!</button>
                );  
            </div>};
            </ReactCardFlip>
            
    </div>,

)})

</div>
      
)}};
    
