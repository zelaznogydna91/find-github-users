const styles = (theme) => ({
  divider: {
    border: "2px solid #00000050",
    borderRadius: "10px",
    width: "40%",
  },
  errorMsg: {
    color: "#ff000090",
    paddingTop: "12px",
    fontSize: "14px",
    textAlign: "center",
  },
  header: {
    color: "#505050",
    fontSize: "30px",
    fontWeight: "bolder",
    paddingLeft: "10%",
    transition: "all 0.3s",
  },
  title: {
    color: "#505050",
    fontSize: "35px",
    fontWeight: "bolder",
    transition: "all 0.3s",
    textAlign: "center",
  },
  bckgd: {
    margin: "12px",
    borderRadius: "6px",
    paddingTop: "20px",
    paddingBottom: "20px",
    width: "auto",
    // height: "900px",
    backgroundColor: "yellow",
    background: `repeating-linear-gradient(to right top,#${theme.randomColor()}66,#${theme.randomColor()}66)`,
  },
});

export default styles;
