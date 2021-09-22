import { createUserProfileDocument } from "./utils/firebase/firebase";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/homePage";
import ShopPage from "./pages/shopPage";
import SignAndSignUpPage from "./pages/signinAndSignupPage/signAndSignUpPage";
import { auth } from "./utils/firebase/firebase";
import { connect } from "react-redux";
import { setUser } from "./store/reducer/userReducer";

const mapStateToProps = ({ user }) => ({ user });

function App({ dispatch, user }) {
  let unsubscribeAuth = null;

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    unsubscribeAuth = auth.onAuthStateChanged(async (user) => {
      const snapRef = await createUserProfileDocument(user);

      if (snapRef) {
        dispatch(setUser({ id: snapRef.id, ...snapRef.data() }));
      } else {
        dispatch(setUser(null));
      }

      return () => {
        unsubscribeAuth();
      };
    });
  }, []);

  return (
    <div className="App">
      <Header currentUser={user} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route
          exact
          path="/signin-and-signup"
          render={() =>
            user.data ? <Redirect to="/" /> : <SignAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
}

export default connect(mapStateToProps)(App);
