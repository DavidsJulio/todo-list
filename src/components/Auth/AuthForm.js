import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AuthForm.module.css";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const changeFormHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <section className={classes.auth}>
        <h1>{`Sign ${isLogin ? "In" : "Up"} to Start!`}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" required />
          </div>
          <div className={classes.btn}>
            <button type="button">
              {isLogin ? "Sign In" : "Create Account"}
            </button>
            <p onClick={changeFormHandler}>
              New to Todo list? Click here to Sign Up
            </p>
          </div>
        </form>
      </section>
    </Card>
  );
}

export default AuthForm;
