import React from "react";
import axios from "axios";
import "./Home.scss";

export const Home = () => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:7492/class").then((response) => {
      //   console.log(response.data);
      setItems(response.data);
    });
  }, []);

  const HandleMale = () => {
    // axios.get("http://localhost:7492/class").then((response) => {});
    alert("Sorry this functionality is not available now");
  };

  return (
    <div className="Home_main">
      <button className="but" onClick={HandleMale}>
        Male
      </button>
      <button className="but" onClick={HandleMale}>
        Female
      </button>
      <button className="but" onClick={HandleMale}>
        Age ascending
      </button>
      <button onClick={HandleMale}>Age descending</button>
      <div className="Sub-main">
        {items.map((item) => (
          <div key={item.id} className="Item">
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
