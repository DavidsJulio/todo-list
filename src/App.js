import { Route, Switch } from "react-router";
import Login from "./pages/Login";
import StartPage from "./pages/StartPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <StartPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
