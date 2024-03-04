    import React, { useState, useContext } from "react";
    import AuthContext from "../../context/AuthContext";
    import style from "./style.module.css";

    const Registerpage = () => {
      const { registerUser } = useContext(AuthContext);
      const [user, setUser] = useState({
        email: "",
        username: "",
        password: "",
        password2: "",
      });

      const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, username, password, confirm_password } = user;
        registerUser(email, username, password, confirm_password);
      };

      return (
        <div className={style.loginPage_main}>
          <form onSubmit={handleSubmit} className={style.form}>
            <h1>RESGISTER </h1>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="form2Example17"
              placeholder="Email Address"
              name="email"
              value={user.email}
              onChange={handleInput}
            />

            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="form2Example17"
              placeholder="Username"
              name="username"
              value={user.username}
              onChange={handleInput}
            />
            <label htmlFor="username">Password</label>
            <input
              type="password"
              id="form2Example17"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleInput}
            />
            <label htmlFor="username">Confirm Password</label>
            <input
              type="password"
              id="form2Example17"
              placeholder="Confirm Password"
              name="confirm_password"
              value={user.confirm_password}
              onChange={handleInput}
            />

            <button  type="submit">Register</button>
          </form>
        </div>
      );
    };

    export default Registerpage;
