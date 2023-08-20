import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchAllPosts, deletePost } from "../API/ajax-helpers";
import ReactCardFlip from "react-card-flip";
// function PostListCards({ post }) {
//   " ";
// }
// {
//   <div class="stash">
//     return (<h3>{post.name}</h3>
//     <button
//       class="stash faves"
//       onClick={() => {
//         navigate(`/${post.id}`);
//       }}
//     >
//       See Your Posts Here!
//     </button>
//     );
//   </div>;
// }
export default function AllCards() {
  const [posts, postList] = useState([]);
  const [error, setError] = useState(null);
  const [isFlipped, setFlipped] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllPosts().then((result) => postList(result));
  }, []);

  const handleClick = (id) => {
    setFlipped({ ...isFlipped, [id]: !isFlipped[id] });
  };

  return (
    <div class="post-card-container">
      {posts.map((post) => (
        <div class="post-card">
          <ReactCardFlip
            flipDirection="horizontal"
            isFlipped={isFlipped[post.id]}
          >
            <div class="flip-card-front">
              <div>Post Name: {post.author.username}</div>
              <div>Post Price: {post.price}</div>
              <div>Post Title: {post.title}</div>
              <div>Delivery: {post.willDeliver}</div>

              <button class="details" onClick={() => handleClick(post.id)}>
                See Details
              </button>
              <button class="delete" onClick={() => deletePost(post.id)}>
                Delete post
              </button>
            </div>
            <div class="flip-card-back">
              <p>Post Name: {post.author.username}</p>
              <p>Post Name Id: {post.author._id}</p>
              <p>Post Cohort: {post.cohort}</p>
              <p>Post Created At: {post.createdAt}</p>
              <p>Description: {post.description}</p>
              <p>Location: {post.location}</p>
              <p>Messages: {post.location}</p>
              <p>Post Price: {post.price}</p>
              <p>Post Title: {post.title}</p>
              <p>Delivery: {post.willDeliver}</p>
              <p>Post Name: {post._id}</p>
              <p>Post Name: {post.createdAt}</p>
              <p>Post Name: {post.updatedAt}</p>
              <button class="flip" onClick={() => handleClick(post.id)}>
                Flip over
              </button>
            </div>
          </ReactCardFlip>
        </div>
      ))}
    </div>
  );
}
