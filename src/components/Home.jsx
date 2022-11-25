import React, { useState, useEffect } from "react";
import Form from "./Form";
import Fade from "./Fade";

function Home() {
  const [data, setData] = useState([]);
  const [showAnimation, setShowAnimation] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(require("../data/api.JSON"));
      const json = await res.json();
      setData(json.animals);
    };
    fetchData();
  }, [setData]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrap">
      {showAnimation ? <Fade /> : <></>}
      <Form data={data}></Form>
    </div>
  );
}

export default Home;
