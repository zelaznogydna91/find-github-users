import { auto } from "async";

const styles = {
  searchContainer: {
    position: "sticky",
    top: "20px",
  },
  searchInput: {
    fontFamily: "'Roboto', sans-serif",
    color: "#333",
    fontSize: "1rem",
    margin: "auto",
    marginTop: "20px",
    marginBottom: "20px",
    padding: ".6rem 5rem",
    borderRadius: "0.8rem",
    backgroundColor: "#00000025",
    border: "none",
    display: "block",
    borderBottom: "0.3rem solid transparent",
    transition: "all 0.3s",
  },
  aContainer: {
    textAlign: "center",
  },
  submitButton: {
    border: "0.15em solid #00000025",
    borderRadius: ".80em",
    boxSizing: "border-box",
    color: "#00000075",
    backgroundColor: "#00000025",
    display: "inline-block",
    fontFamily: '"Roboto", sans-serif',
    fontSize: "larger",
    fontWeight: 300,
    padding: "0.35em 1.2em",
    textAlign: "center",
    textDecoration: "none",
    transition: "all 0.3s",
  },
  submitBtnHover: {
    backgroundColor: "#00000075",
    borderRadius: ".5em",
    boxSizing: "border-box",
    color: "#fff",
    fontFamily: "Roboto, sans-serif",
    fontSize: "larger",
    fontWeight: 300,
    padding: ".6rem 5rem",
    textAlign: "center",
    transition: "all .6s ease 0s",
  },
}; 
export default styles;
