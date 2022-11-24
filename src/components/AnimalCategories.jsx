import React from 'react'
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Cart from './Cart';
import SingleCard from './SingleCard'

const AnimalCategories = () => {
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

  <div>
   <SingleCard data={data} />
</div>)
}

export default AnimalCategories