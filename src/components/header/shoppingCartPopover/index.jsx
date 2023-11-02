import { useSelector } from "react-redux";
import { Popover } from "@mui/material";
import { useDispatch } from "react-redux";
import { close } from "../../../store/cart";
import { useEffect } from "react";

function CartPopover() {
  const open = useSelector((state) => state.cart.open);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const anchorEl = document.getElementById("anchor");

  const closeCart = () => {
    dispatch(close());
  };

  let cartInfo = useEffect(() => {
    renderCartProperties();
  })

  const renderCartProperties = () => {
    if (cart.totalCost === 0) return 'Your Cart Is Empty'
    return Object.entries(cart).map(([key, value]) => (
      <div key={key}>
        <p>
          <strong>{key}:</strong> {value}
        </p>
      </div>
    ));
  };

  console.log(cart);

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
      <p>{cartInfo}</p>
    </Popover>
  );
}

export default CartPopover;
