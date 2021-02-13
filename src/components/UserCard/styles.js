const styles = (theme) => ({
  anchor: { textDecoration: "none" },
  avatar: {
    verticalAlign: "middle",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    transition: "all 0.3s",
  },
  cardContainer: {
    borderRadius: "40px 6px 30px",
    margin: "30px",
    background: `repeating-linear-gradient(to right top,#${theme.randomColor()}66,#${theme.randomColor()}66)`,
    boxShadow: "rgb(112 112 112) 7px 4px 25px -13px",
  },
  username: {
    margin: "12px 20px 4px 20px",
    color: "white",
    fontSize: "500",
    weight: "500",
  },
  name: {
    marginLeft: "20px",
    paddingBottom: "16px",
    color: "white",
    fontSize: "35px",
    fontWeight: "bolder",
  },
});

export default styles;
