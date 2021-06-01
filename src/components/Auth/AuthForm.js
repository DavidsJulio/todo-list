import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AuthForm.module.css";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const changeFormHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //TODO: validation

    if (isLogin) {
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAv7kAHqg-FzvkEqVq9MAhh1HYAprIi3Ic",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
        } else {
          return res.json().then((data) => {
            //Show error modal
            console.log(data);
          });
        }
      });
    }
  };

  return (
    <Card>
      <section className={classes.auth}>
        <h1>{`Sign ${isLogin ? "In" : "Up"} to Start!`}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.btn}>
            <button type="submit">
              {isLogin ? "Sign In" : "Create Account"}
            </button>
            <p onClick={changeFormHandler}>
              {isLogin
                ? "New to Todo list? Click here to Sign Up"
                : "Login with existing account"}
            </p>
          </div>
        </form>
      </section>
    </Card>
  );
}

export default AuthForm;
