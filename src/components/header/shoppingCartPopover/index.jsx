import { useSelector } from "react-redux";
import { Button, Popover } from "@mui/material";
import { useDispatch } from "react-redux";
import { close } from "../../../store/cart";
import { Link } from "react-router-dom";

function CartPopover() {
  const open = useSelector((state) => state.cart.open);
  const cart = useSelector((state) => state.cart.cart);
  const totalCost = useSelector((state) => state.cart.totalCost);
  const dispatch = useDispatch();
  const anchorEl = document.getElementById("anchor");

  const closeCart = () => {
    dispatch(close());
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={closeCart}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <div className="popover">
        <h3> Your Cart </h3>
        {Object.keys(cart).length === 0 ? <p>Your Cart Is Empty!</p> : 
          Object.entries(cart).map(([key, value]) => (
                <div key={key} style={{display:'flex', justifyContent:'space-evenly', gap:'2rem'}}>
                  <p> <strong>{key}</strong> </p>
                  <p> {'quanitity: ' + value.amount} </p>
                  <p> {'price: $' + value.cost} </p>
                </div>
              ))}
              <hr />
              <p style={{textAlign:'right'}}> <strong>Total: </strong> {'$'+ totalCost} </p>
              <Button variant={totalCost === 0 ? 'disabled' : 'contained'} >
                <Link to="/checkout">Continue to Checkout</Link>
              </Button>
      </div>
    </Popover>
  );
}

export default CartPopover;
