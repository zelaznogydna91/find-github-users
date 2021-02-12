import React, { useState, useDebugValue } from "react";
import styles from "./styles";

const useHovered = () => {
  const [isHovered, setIsHovered] = useState(false);
  useDebugValue(isHovered);
  return [isHovered, setIsHovered];
};

const UserSearch = (props) => {
  const [username, setUsername] = useState();
  const [isHovered, setIsHovered] = useHovered(false);

  const { onSubmit } = props;

  const handleChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  const submitNClear = (u) => {
    onSubmit(u);
    setUsername("");
  };

  return (
    <div style={styles.searchContainer}>
      <input
        onKeyDown={(e) => e.key === "Enter" && submitNClear(username)}
        value={username}
        onChange={handleChange}
        style={styles.searchInput}
      />
      <div style={styles.aContainer}>
        <button
          style={isHovered ? styles.submitBtnHover : styles.submitButton}
          onMouseEnter={() => setIsHovered(!isHovered)}
          onMouseLeave={() => setIsHovered(!isHovered)}
          onClick={() => submitNClear(username)}
        >
          Search User
        </button>
      </div>
    </div>
  );
};

export default UserSearch;
