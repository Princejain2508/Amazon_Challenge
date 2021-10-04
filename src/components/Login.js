import { Link, useHistory } from "react-router-dom";
import React, { useRef } from "react";
import "./css/Login.css";

import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const email = useRef("");
  const password = useRef("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email.current.value, password.current.value)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        email.current.value,
        password.current.value
      )
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          alt="Login Logo"
          className="login__logo"
          src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" ref={email} />
          <h5>Password</h5>
          <input type="password" ref={password} />

          <button className="login__signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>

        <p>
          By signing in you agree to Amazon-Challenge Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
