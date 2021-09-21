import React from "react";
import SignIn from "../../components/signIn/SignIn";
import Signup from "../../components/signup/Signup";
import "./signinAndSignupPage.styles.scss";

const signAndSignUpPage = () => {
  return (
    <div className="signinAndUp">
      <SignIn />
      <Signup />
    </div>
  );
};

export default signAndSignUpPage;
