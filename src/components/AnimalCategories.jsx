import React from "react";
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { useSelector } from "react-redux";

const AnimalCategories = () => {
  const [data, setData] = useState([]);
  const filteredData = useSelector((state) => state.data);
  console.log(filteredData);
  useEffect(() => {
    const fetchData = async () => {
      if (filteredData.length !== 0) {
        setData(filteredData);
      } else {
        const res = await fetch(require("../data/api.JSON"));
        const json = await res.json();
        setData(json.animals);
      }
    };
    fetchData();
  }, [setData, filteredData]);

  console.log(data);
  return <SingleCard data={data} />;
};

export default AnimalCategories;
