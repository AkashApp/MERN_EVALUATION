import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { usernames, password } from "../Redux/action";
import axios from "axios";

export const Admin = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const HandleClick = () => {
    axios.get("http://localhost:7492/admin");
  };
  return (
    <div>
      <div className="Login">
        <h1>Enter Your Login Credentials Here!</h1>
        <input
          type="text"
          placeholder="Enter Username here"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={HandleClick}>Login</button>
      </div>
      <div>
        <Link to={"/createaccount"}>create Admin Account!</Link>
      </div>
    </div>
  );
};
