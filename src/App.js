import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import ShopPage from "./pages/shopPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
