import React from "react";
import axios from "axios";

export const Create = () => {
  const [username, setUsername] = React.useState("");
  const [pass, setPass] = React.useState("");

  const HandleClick = () => {
    axios
      .post("http://localhost:7492/admin", {
        adminname: username,
        password: pass,
      })
      .then((res) => {
        console.log(res);
        let X = res.data.adminname;
        alert(`${X}you have createed account successfully!`);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Set Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Set Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={HandleClick}>Create</button>
      </div>
    </div>
  );
};
