import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TabFilter from "./tabFilter";
import { useDispatch } from 'react-redux';
import { open } from '../../store/cart';
import "./header.css";
import CartPopover from './shoppingCartPopover';

function Header() {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open());
  }

  return (
    <header>
      <img src="../../src/assets/products.jpg" alt="products"/>
      <h1>The Producters</h1>
      <ShoppingCartIcon id='anchor' className='cart' onClick={openCart} />
      <TabFilter />
      <CartPopover />
    </header>
  );
}

export default Header;
