import { Route, Switch } from "react-router";
import MainHeader from "./components/layout/MainHeader";
import Login from "./pages/Login";
import TodoList from "./pages/Home";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/" exact>
          <TodoList />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </main>
    </div>
  );
}

export default App;
