import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TabFilter from "./tabFilter";
import "./header.css";

function Header() {
  return (
    <header>
      <img src="../../src/assets/tomatoes.jpg" alt="fresh picked tomatoes"/>
      <h1>The Producers</h1>
      <ShoppingCartIcon className='cart'/>
      <TabFilter />
    </header>
  );
}

export default Header;
