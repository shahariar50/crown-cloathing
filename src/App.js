import { createUserProfileDocument } from "./utils/firebase/firebase";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/homePage";
import ShopPage from "./pages/shopPage";
import SignAndSignUpPage from "./pages/signAndSignUpPage";
import { auth } from "./utils/firebase/firebase";

function App() {
  const [currentUser, setCurrentUser] = React.useState(null);

  let unsubscribeAuth = null;

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    unsubscribeAuth = auth.onAuthStateChanged(async (user) => {
      createUserProfileDocument(user);

      setCurrentUser(user);

      return () => {
        unsubscribeAuth();
      };
    });
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
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
