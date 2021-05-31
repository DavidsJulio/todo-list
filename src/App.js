import { Route, Switch } from "react-router";
import Login from "./pages/Login";
import StartPage from "./pages/StartPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <main>
        <Switch>
          <Route path="/" exact>
            <StartPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </main>
    </Layout>
  );
}

export default App;
