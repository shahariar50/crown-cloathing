import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import ItemPage from "./pages/itemPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>{" "}
        <Route exact path="/:title">
          <ItemPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
