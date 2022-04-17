import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { username, password } from "../Redux/action";
import axios from "axios";

export const Admin = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const Navigate = useNavigate();

  const HandleClick = () => {
    axios
      .get(`http://localhost:7492/admin?username=${username}`)
      .then((response) => {
        //   response.data[0].password
        if (response.data[0].password == password) {
          Navigate("/schedule");
          console.log("Done");
        }
      })
      .catch((error) => {
        alert("Username Or password is incorrect");
        console.log(error.message);
      });
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
