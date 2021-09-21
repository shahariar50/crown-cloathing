import { createUserProfileDocument } from "./utils/firebase/firebase";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/homePage";
import ShopPage from "./pages/shopPage";
import SignAndSignUpPage from "./pages/signinAndSignupPage/signAndSignUpPage";
import { auth } from "./utils/firebase/firebase";

function App() {
  const [currentUser, setCurrentUser] = React.useState(null);

  let unsubscribeAuth = null;

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    unsubscribeAuth = auth.onAuthStateChanged(async (user) => {
      const snapRef = await createUserProfileDocument(user);

      if (snapRef) {
        setCurrentUser({ id: snapRef.id, ...snapRef.data() });
      }

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
