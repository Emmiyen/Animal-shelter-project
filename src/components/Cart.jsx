import * as React from "react";
import { useSelector } from "react-redux";
import "./cart.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import DataTimePicker from "./DataTimePicker";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function TheCart() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div className="cart-wrap">
      <h2 className="cart-title">You choose these animals:</h2>
      {cart.map((el) => {
        return (
          <div className="cart-select">
            <img src={el.photos} alt="" />
            <p>{el.name}</p>
            <p>{el.age}</p>
            <p>{el.gender}</p>
          </div>
        );
      })}
      <Button variant="contained" color="success" onClick={handleClickOpen}>
        Make a date!
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Make a date:"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <form>
              <label>
                Name:
                <input className="input-cart" type="text" name="name" />
              </label>
              <label>
                Email:
                <input className="input-cart" type="email" name="email" />
              </label>
            </form>
            <DataTimePicker />
            <Button className="btn-cart" variant="contained" color="success">
              Submit
            </Button>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default TheCart;
