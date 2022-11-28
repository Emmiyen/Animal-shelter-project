import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import PetsIcon from "@mui/icons-material/Pets";
import { useDispatch } from "react-redux";
import { addPet } from "../actions";
import { useSelector } from "react-redux";

export default function Button(props) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const addToCart = (item) => {
    const cartArr = [...cart, item];
    dispatch(addPet(cartArr));
  };
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab variant="extended" onClick={() => addToCart(props.item)}>
        <PetsIcon color="primary" sx={{ mr: 1 }} />
        I'm intrested!
      </Fab>
    </Box>
  );
}
