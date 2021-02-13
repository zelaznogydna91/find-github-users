import React from "react";
import styles from "../UserCard/styles";
import { randomColor } from "../../utils";

const UserCard = (props) => {
  const { user } = props;
  const theme = { randomColor: randomColor };

  return (
    <a
      style={styles(theme).anchor}
      href={user.html_url}
      target={"_blank"}
      rel={"noopener noreferrer"}
    >
      <div style={styles(theme).cardContainer}>
        <img style={styles(theme).avatar} src={user.avatar_url} alt="Avatar" />
        <div style={styles(theme).username}>{user.login}</div>
        <div style={styles(theme).name}>{user.name}</div>
      </div>
    </a>
  );
};

export default UserCard;
