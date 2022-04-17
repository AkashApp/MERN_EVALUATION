import React from "react";
import axios from "axios";
import "./Schedule.scss";

export const Schedule = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:7492/class").then((response) => {
      //   console.log(response.data);
      setItems(response.data);
    });
  }, []);

  const HandleChange = () => {
    alert("Modification functionality is not yet applied");
  };

  const HandleClass = () => {
    alert("you can add new class");
  };

  return (
    <div className="Home_main">
      <button onClick={HandleClass}>create new class</button>
      <div className="Sub-main">
        {items.map((item) => (
          <div key={item.id} className="Item" onClick={HandleChange}>
            <h1>Section: {item.section}</h1>
            <h4>Grade: {item.grade}</h4>
            <h2>Subject: {item.subject}</h2>
            <h3>Teacher: {item.teacher_id.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
