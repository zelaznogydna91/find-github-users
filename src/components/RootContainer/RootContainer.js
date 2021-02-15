import React, { useRef, useState } from "react";
import UserCard from "../UserCard";
import UserSearch from "../UserSearch";
import axios from "axios";
import styles from "./styles";
import { randomColor, scrollRefIntoView } from "@zelaznogydna/utils";

const getUser = (username) => {
  return axios
    .get(`https://api.github.com/users/${username}`)
    .then((r) => r.data);
};

const RootContainer = (props) => {
  const rootRef = useRef();
  const histTopRef = useRef();
  const [users, setUsers] = useState([]);
  const [viewHistory, setViewHistory] = useState(true);
  const [notFound, setNotFound] = useState();

  const addUser = (user) => setUsers((users) => [user, ...users]);

  const handleSearch = (username) => {
    getUser(username)
      .then((user) => {
        if (rootRef.current) {
          addUser(user);
          scrollRefIntoView(histTopRef);
          setNotFound(false);
        }
      })
      .catch((e) => {
        if (rootRef.current) setNotFound(true);
      });
  };

  const theme = { randomColor: randomColor };
  return (
    <div style={styles(theme).bckgd} ref={rootRef}>
      <h1 style={styles(theme).title}>🤓 Find your GitHub friends 🤓</h1>
      <UserSearch onSubmit={handleSearch} />
      {notFound && (
        <div style={styles(theme).errorMsg}>
          {`Your friend was not found please check you have the correct username...`}
        </div>
      )}
      {users.length > 0 && (
        <h1
          onClick={() => {
            setViewHistory(!viewHistory);
          }}
          ref={histTopRef}
          style={styles(theme).header}
        >
          {viewHistory ? "Close History" : "Open History"}
        </h1>
      )}
      {users &&
        viewHistory &&
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
