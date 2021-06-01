import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

function MainHeader() {
  const authContext = useContext(AuthContext);

  const isLoggedIn = authContext.isLoggedIn;

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} exact to="/">
              Home
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/login">
                Sign In
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button className={classes.button}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
