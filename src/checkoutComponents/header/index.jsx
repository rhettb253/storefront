import { Button } from "@mui/material";

function CheckoutHeader() {

    const goBack = () => {
        window.history.back();
      };

    return (
      <header>
        <img src="../../src/assets/tomatoes.jpg" alt="fresh picked tomatoes" className="checkoutBanner"/>
        <h1>The Producers</h1>
        <Button variant='contained' className='goBack' onClick={goBack}>Go Back</Button>
        <h3>CHECKOUT</h3>
      </header>
    )
  }

export default CheckoutHeader;