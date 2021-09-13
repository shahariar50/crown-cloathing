import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/homePage";
import ShopPage from "./pages/shopPage";
import SignAndSignUpPage from "./pages/signAndSignUpPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/signin-and-signup">
          <SignAndSignUpPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
