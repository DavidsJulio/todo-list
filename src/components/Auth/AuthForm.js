import React, { useState, useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";
import Card from "../UI/Card";
import classes from "./AuthForm.module.css";

function AuthForm() {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authContext = useContext(AuthContext);

  const changeFormHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //TODO: validation

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAv7kAHqg-FzvkEqVq9MAhh1HYAprIi3Ic";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAv7kAHqg-FzvkEqVq9MAhh1HYAprIi3Ic";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            // Show error modal
            let errorMessage = "Authentication Failed";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        //Success
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authContext.login(data.idToken, expirationTime.toISOString());
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
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
            {!isLoading && (
              <button type="submit">
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            )}
            {isLoading && <p>Loading..</p>}
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
