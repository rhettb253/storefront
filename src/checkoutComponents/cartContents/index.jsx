import { useSelector } from "react-redux";

function CartContents() {
    
  const cart = useSelector((state) => state.cart.cart);
  const totalCost = useSelector((state) => state.cart.totalCost);

  return (
    <div className="cartContents">
        {Object.keys(cart).length === 0 ? <p>Your Cart Is Empty!</p> : 
          Object.entries(cart).map(([key, value]) => (
                <div key={key} style={{display:'flex', justifyContent:'space-evenly', gap:'2rem'}}>
                  <img src={value.img} className="checkoutList"></img>
                  <hr/>
                  <p> <strong>{key}</strong> </p>
                  <hr/>
                  <p> {'quanitity: ' + value.amount} </p>
                  <hr/>
                  <p> {'price: $' + value.cost} </p>
                </div>
              ))}
              <hr />
              <p style={{textAlign:'right'}}> <strong>Total: </strong> {'$'+ totalCost} </p>
    </div>
  )
}

export default CartContents