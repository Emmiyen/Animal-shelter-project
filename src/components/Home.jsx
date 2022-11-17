import React, { useState, useEffect } from "react";

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
console.log(data)

  return (
   <p>home</p>
  );
}

export default Home;