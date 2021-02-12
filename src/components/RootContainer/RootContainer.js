import React, { useRef, useState } from "react";
import UserCard from "../UserCard";
import UserSearch from "../UserSearch";
import axios from "axios";
import styles from "./styles";

const scrollRefIntoView = (ref) =>
  ref.current &&
  ref.current.scrollIntoView({ behavior: "smooth", block: "center" });

const getUser = (username) => {
  return axios
    .get(`https://api.github.com/users/${username}`)
    .then((r) => r.data);
};
const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const RootContainer = (props) => {
  const rootRef = useRef();
  const histTopRef = useRef();
  const [users, setUsers] = useState([]);

  const addUser = (user) => setUsers((users) => [user, ...users]);

  const handleSearch = (username) => {
    getUser(username)
      .then((user) => {
        if (rootRef.current) {
          addUser(user);
          scrollRefIntoView(histTopRef);
        }
      })
      .catch((e) => {
        if (rootRef.current) alert(`${username} was not found`);
      });
  };

  const theme = { randomColor: randomColor };
  return (
    <div style={styles(theme).bckgd} ref={rootRef}>
      <h1 style={styles(theme).title}>🤓 Find your GitHub friends 🤓</h1>
      <UserSearch onSubmit={handleSearch} />
      {users.length > 0 && (
        <h1 ref={histTopRef} style={styles(theme).header}>
          History
        </h1>
      )}
      {users &&
        users.map((user, index, arr) => (
          <div key={index}>
            <UserCard user={user} />
            {index < arr.length - 1 && <hr style={styles(theme).divider} />}
          </div>
        ))}
    </div>
  );
};

export default RootContainer;
