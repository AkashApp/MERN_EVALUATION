import React from "react";
import axios from "axios";

export const Home = () => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:7492/class").then((response) => {
      //   console.log(response.data);
      setItems(response.data);
    });
  }, []);
  console.log(items);
  return <div>Home</div>;
};
