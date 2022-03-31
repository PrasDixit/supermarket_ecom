import { useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const client_id = 2;
  const client_secret = "olzBb6we0po4B0PSJyDpNGhhSsnvZmeio8sRoASa";
  const grant_type = "password";
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postRequestHandler = async (e: any) => {
    e.preventDefault();
    const data = {
      client_id,
      client_secret,
      grant_type,
      username,
      password,
    };
    console.log(data);

    const response = await axios.post(
      "https://uat.ordering-dalle.ekbana.net/api/v4/auth/login",
      data
    );

    console.log(response);
    console.log(response.status);
  };

  return (
    <div>
      <div className="login">
        <div className="container">
          <h2>Login Form</h2>

          <div
            className="login-form-grids animated wow slideInUp"
            data-wow-delay=".5s"
          >
            <form>
              <input
                type="email"
                placeholder="Email Address"
                value={username}
                name={username}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                name={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="forgot">
                <Link to="/ForgotPassword">Forgot Password?</Link>
              </div>
              <input
                type="submit"
                value="Login"
                onClick={(e) => postRequestHandler(e)}
              />
            </form>
          </div>
          <h4>For New People</h4>
          <p>
            <Link to="/register">Register Here</Link> (Or) go back to{" "}
            <Link to="/">
              Home
              <span
                className="glyphicon glyphicon-menu-right"
                aria-hidden="true"
              ></span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
