import React from "react";
import AppNavBar from "../layout/AppNavBar";

const styles = {
  header: {
    backgroundImage: "url(./project-images/background.jpg)",
    height: "85vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  content: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "white",
    paddingTop: "2rem",
  },

  textPosition: {
    textAlign: "center",
  },
};

const Home = () => {
  document.title = "Portfolio - Home";
  return (
    <div style={styles.header}>
      <AppNavBar isHome="active" />
      <div style={styles.content}>
        <div className="container">
          <div className="col s12" style={styles.textPosition}>
            <h1 className="white-text">James Bromley</h1>
            <h4 className="white-text lighten-2">
              Full Stack <span className="light-blue-text">Programmer</span>{" "}
              <span className="white-text">{"&"}</span>{" "}
              <span className="light-blue-text">Web Developer</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
