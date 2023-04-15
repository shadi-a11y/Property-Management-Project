import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const[invalid, setInvalid] = useState(false);

  const [cookies, setCookies] = useCookies(["access_token"]);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/users/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("userID", response.data.userID);
        navigate("/home")
      }
    } catch (error) {
      console.log(error);
      setInvalid(true);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          <span>Email:</span>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {invalid && <label id="invalid">Invalid credentials, please enter correct email and password</label>}
        <button type="submit">Login</button>
      </form>
      <p>Dont have an account? <Link id="sign-up" to="/signup">Sign up</Link> </p>
    </div>
  );
};

export default Login;
