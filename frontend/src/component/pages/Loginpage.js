import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import style from "./style.module.css";

function Loginpage() {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    email.length > 0 && loginUser(email, password);

    console.log(email);
    console.log(password);
  };

  return (
    <div className={style.loginPage_main}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h1>LOGIN </h1>
        <label htmlFor="username">Email</label>
        <input type="email" id="form2Example17" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Loginpage;
