import React from "react";
import styles from "../UserCard/styles";

const UserCard = (props) => {
  const { user,lastOne } = props;
  console.log("useruseruser", user);
  return (
    <a style={styles.anchor} href={user.html_url} target={"_blank"} rel={"noopener noreferrer"}>
      <div style={styles.cardContainer}>
        <img src={user.avatar_url} alt="Avatar" style={styles.avatar} />
        <div style={styles.username}>{user.login}</div>
        <div style={styles.name}>{user.name}</div>
      </div>
    </a>
  );
};

export default UserCard;
