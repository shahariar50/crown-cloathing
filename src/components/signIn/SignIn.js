import React from "react";
import "./signIn.styles.scss";

const SignIn = () => {
  const [loginData, setLoginData] = React.useState({ email: "", password: "" });

  const handleOnChange = ({ target }) => {
    setLoginData({ [target.name]: target.value });
  };

  return (
    <div className="signIn">
      <h2>I already have an account.</h2>
      <span>Sign in with your email and password.</span>

      <form>
        <input
          name="email"
          type="email"
          onChange={handleOnChange}
          value={loginData.email}
          required
        />
        <label>Email</label>
        <input
          name="password"
          type="password"
          onChange={handleOnChange}
          value={loginData.password}
          required
        />
        <label>Password</label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SignIn;
