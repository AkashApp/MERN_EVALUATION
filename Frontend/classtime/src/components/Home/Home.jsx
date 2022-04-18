import React from "react";
import axios from "axios";
import "./Home.scss";

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [input, setInput] = React.useState();
  React.useEffect(() => {
    HandleAll();
  }, []);

  const HandleAll = () => {
    axios.get("http://localhost:7492/class").then((response) => {
      //   console.log(response.data);
      setItems(response.data);
    });
  };

  const HandleMale = () => {
    axios.get(`http://localhost:7492/teacher?gender=Male`).then((response) => {
      let X = response.data[0]._id;
      axios
        .get(`http://localhost:7492/class?teacher_id=${X}`)
        .then((response) => {
          console.log(response);
          setItems(response.data);
        });
    });
  };
  const HandleFemale = () => {
    axios
      .get(`http://localhost:7492/teacher?gender=Female`)
      .then((response) => {
        let X = response.data[0]._id;
        axios
          .get(`http://localhost:7492/class?teacher_id=${X}`)
          .then((response) => {
            console.log(response);
            setItems(response.data);
          });
      });
  };

  const Search = () => {
    axios
      .get(`http://localhost:7492/teacher?name=${input}`)
      .then((response) => {
        let X = response.data[0]._id;
        axios
          .get(`http://localhost:7492/class?teacher_id=${X}`)
          .then((response) => {
            console.log(response);
            setItems(response.data);
          });
      });
  };
  const HandleAge = () => {
    alert("THis functionality is not completed");
  };
  return (
    <div className="Home_main">
      <input
        type="text"
        placeholder="Enter Teacher Name"
        className="but"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={Search}>Search</button>
      <br />
      <br />
      <button className="but" onClick={HandleMale}>
        Male
      </button>
      <button className="but" onClick={HandleFemale}>
        Female
      </button>
      <button className="but" onClick={HandleAge}>
        Age ascending
      </button>
      <button className="but" onClick={HandleAge}>
        Age descending
      </button>
      <button onClick={HandleAll}>All</button>
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
