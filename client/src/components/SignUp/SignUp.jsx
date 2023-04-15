import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate} from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const [avatar, setAvatar] = useState("");

  const [invalid, setInvalid] = useState(false);

  const [cookies, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/users/signup",
        {
          email,
          name,
          password,
          // avatar
        }
      );

      if (response.status === 200) {
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("userID", response.data.userID);
        console.log("SignUp successfull!");  
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      setInvalid(true);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="SignUp">
      <form onSubmit={handleSubmit} className="signup-form">
        <label>
          <span>Email:</span>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        {/* <label>
          <span>Avatar:</span>
          <input
            type="file"
            accept="image/*"
            className="custom-file-input"
            onChange={(e) => {
              setAvatar(e.target.files[0]);
            }}
            placeholder=""
          />
        </label> */}
        {invalid && (
          <label id="invalid">
            Invalid credentials, please enter correct email and password
          </label>
        )}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignUp;
