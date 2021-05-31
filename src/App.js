import { Route } from "react-router";
import Login from "./pages/Login";
import StartPage from "./pages/StartPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <main>
        <Route path="/" exact>
          <StartPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </main>
    </Layout>
  );
}

export default App;
