import { signInWithEmailAndPassword } from "@firebase/auth";
import React from "react";
import { auth, signInWithGoogle } from "../../utils/firebase/firebase";
import Button from "../button/Button";
import FormInput from "../formInput/FormInput";
import "./signIn.styles.scss";

const SignIn = () => {
  const [loginData, setLoginData] = React.useState({ email: "", password: "" });

  const handleOnChange = ({ target }) => {
    setLoginData({ ...loginData, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );

      setLoginData({ email: "", password: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signIn">
      <h2>I already have an account.</h2>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          onChange={handleOnChange}
          name="email"
          type="email"
          value={loginData.email}
          required
        />
        <FormInput
          label="Password"
          onChange={handleOnChange}
          name="password"
          type="password"
          value={loginData.password}
          required
        />
        <Button type="submit">Signin</Button>
        <Button
          type="button"
          className="ml-3"
          isGoogleSignIn
          onClick={signInWithGoogle}
        >
          Sign in with google
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
