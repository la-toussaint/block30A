import { useState, react } from "react";
import { BASE_URL_USER_ME, BASE_URL_POSTS, BASE_URL_USERS } from "./index";
import { useSelector } from "react-redux";
export const fetchAllUsers = async () => {
  try {
    // write a fetch request for:
    // https://fsa-puppy-bowl.herokuapp.com/api/users
    const response = await fetch(BASE_URL_USERS);
    const result = await response.json();

    return result.data.users;
  } catch (error) {
    console.error(error);
  }

  // update UserList with the results
};

export const fetchAllPosts = async () => {
  try {
    const response = await fetch(BASE_URL_POSTS);
    const result = await response.json();
    console.log(result.data.posts);
    return result.data.posts;
  } catch (error) {
    console.log(error);
  }
};

export const fetchProfile = async (token) => {
  try {
    const response = await fetch(BASE_URL_USER_ME, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id) => {
  try {
    const response = await fetch(`(BASE_URL_POSTS` / `${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  }
};

function RenderSelectedUser({ pickMyId, myId }) {
  const fetchSingleUser = async (id) => {
    try {
      const response = await fetch(`BASE_URL_USERS_ME`);
      const user = await response.json();
      const userCard = document.createCard("div");
      userCard.classList.add("user");
      userCard.innerHTML = `
            <h4>${user.name}</h4>
            <p>${user.username}</p>
            <p>${user.password}</p>
            <p>${user.token}</p>
            ${user.posts}</p>



        `;
      usersContainer.appendChild(userCard);
    } catch (error) {
      console.log(error);
    }
  };

  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchSelectedUser() {
      try {
        const response = await fetch(`BASE_URL_USERS_ME`);
        const result = await response.json();
        setUser(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSelectedUser();
  }, []);
  return (
    <div>
      <p>
        <b>Name: </b>
        {user.name}
      </p>
      <p>
        <b>Username: </b>
        {user.username}
      </p>
      <p>
        <b>Posts: </b>
        {user.post}
      </p>
    </div>
  );
}
