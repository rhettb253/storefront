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
      <img src="../../src/assets/tomatoes.jpg" alt="fresh picked tomatoes"/>
      <h1>The Producers</h1>
      <ShoppingCartIcon id='anchor' className='cart' onClick={openCart} />
      <TabFilter />
      <CartPopover />
    </header>
  );
}

export default Header;
