import { Route, Switch, Redirect } from "react-router";
import { useContext } from "react";
import Login from "./pages/Login";
import StartPage from "./pages/StartPage";
import Layout from "./components/Layout/Layout";
import AuthContext from "./store/auth-context";
import TodoList from "./components/Todo/TodoList";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          {authCtx.isLoggedIn && <TodoList />}
          {!authCtx.isLoggedIn && <StartPage />}
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/login">
            <Login />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
