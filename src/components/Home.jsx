import React, { useState, useEffect } from "react";
import Form from "./Form";
function Home() {
const [data, setData] = useState([]);
useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(require("../data/api.JSON"));
      const json = await res.json();
      setData(json.animals);
    };
    fetchData();
  }, [setData]);

  return (
   <Form data={data}></Form>
  );
}

export default Home;