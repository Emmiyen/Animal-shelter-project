import React from 'react'
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from '../context/ContextProvider';
import { useParams } from "react-router-dom";
import Cart from './Cart';


const Products = () => {

  const {cart, setCart} = useContext(Context);

  const [categories, setCategories] = useState([]);

  const { id } = useParams();

  const handleClick = (item) => {
    setCart([...cart, item])
    console.log(cart)
  }


  useEffect(() => {

    const getCategories= async() =>{
        const response = await fetch(`api.JSON${id}`)
        const data = await response.json();
        // console.log(data)
        setCategories(data.slice(0,30))
      };  
      getCategories();
  }, []);

  return (

  <div>
    <div className="flex flex-wrap w-[80%] justify-center m-auto gap-5 mb-10 mt-10">

    {
      categories.map((item,idx) =>
      <div key={idx} item={item} className="relative w-[16rem] mb-8 bg-gray-200 rounded-lg ">
        <Link to={`/singleAnimal/${item.id}`}>
        <img src={item.images} alt="" className="border-2 rounded-lg hover:opacity-75"/>
        <div className="flex justify-between items-center ">
          <p className='text-gray-700 py-2'>{item.title}</p>
          <p className="font-bold text-gray-700">{item.price}€</p>

        </div></Link>
        <button onClick={() => handleClick(item)} className="absolute top-[-10px] right-[-10px] text-center bg-amber-500 rounded-xl p-1 text-white">
        {/* <Cart aria-label="cart" >
                <Badge className="text-white">
                    <ShoppingCartIcon/>
                </Badge>
            </Cart> */}
        </button>
      </div>
      )
    }
  </div>


</div>)
}

export default Products