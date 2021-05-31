import React from "react";
import Card from "../UI/Card";
import classes from "./Home.module.css";

function Home() {
  return (
    <Card>
      <div className={classes.content}>
        <h1>Welcome</h1>
        <p>To a great app that will help you improve your productivity!</p>
        <p>Sign in and start checking your tasks.</p>
      </div>
    </Card>
  );
}

export default Home;
