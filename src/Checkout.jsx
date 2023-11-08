import "./Checkout.css";
import CheckoutHeader from "./checkoutComponents/header";
import CartContents from "./checkoutComponents/cartContents";
import PurchaseForm from "./checkoutComponents/purchaseForm";

function Checkout() {
  return (
    <>
      <CheckoutHeader />
      <CartContents />
      <PurchaseForm />
    </>
  );
}

export default Checkout;
