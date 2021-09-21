import { createUserWithEmailAndPassword } from "@firebase/auth";
import React from "react";
import { auth } from "../../utils/firebase/firebase";
import Button from "../button/Button";
import FormInput from "../formInput/FormInput";
import "./signup.styles.scss";

const Signup = () => {
  const [formData, setFormData] = React.useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword)
      return alert("Password don't match.");

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      setFormData({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="signupForm" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          value={formData.displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          placeholder="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default Signup;
