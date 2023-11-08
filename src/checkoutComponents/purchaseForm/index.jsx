import { Button } from "@mui/material";

function PurchaseForm() {
  return (
    <div className="creditCard">
    <h4>Credit Card Information</h4>
    <form>
        <div className="form">
            <fieldset>
                <legend>Billing Address</legend>
                    <input type="text" name="name" id="name" placeholder="Your Name" required />
                    <input type="text" name="name" id="name" placeholder="Address" required />
                    <input type="text" name="name" id="name"  placeholder="City" required />
                    <input type="text" name="name" id="name" placeholder="State" required />
                    <input type="text" name="name" id="name" placeholder="Zip" required />
            </fieldset>
            <fieldset>
                <legend>Payment Details</legend>
                    <input type="text" name="name" id="name" placeholder="Credit Card Number" required />
                    <input type="text" name="name" id="name" placeholder="Expiration" required />
                    <input type="text" name="name" id="name"  placeholder="CVV" required />
            </fieldset>
        </div>
        <Button variant="contained" color="success">Take My Money!</Button>
    </form>
    </div>
  )
}

export default PurchaseForm;