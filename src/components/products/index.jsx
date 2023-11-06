import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
import { toggleShow, selectedItem } from "../../store/selectedItem";
import { Card, CardHeader, CardMedia, CardContent, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { getProducts } from "../../store/productFilter";

function Products() {
  const dispatch = useDispatch();
  const produce = useSelector((state) => state.filter.produce);
  const type = useSelector((state) => state.filter.type);
  const [renderedProduce, setRenderedProduce ] = useState(produce);
  const products = useSelector(state => state.filter.products)

  useEffect(() => {
    dispatch(getProducts());
    // below was for the produce data I was using before we imported from products from db
    // if (type === 'FRUITS') {
    //   setRenderedProduce(produce.filter(item => item.type === 'fruit'))
    // } else if (type === 'VEGETABLES') {
    //   setRenderedProduce(produce.filter(item => item.type === 'vegetable'))
    // } else if (type === 'ALL') setRenderedProduce(produce);
  }, [dispatch]);

  const handleItemClick = (e, item) => {
    dispatch(toggleShow()); 
    dispatch(selectedItem(item));
  }

  const addCartClick = (e, item) => {
    dispatch(addToCart(item));
  }

  return (
    <ul>
      {products.map((item, idx) => (
        <Card key={idx} >
          <CardHeader
            title={item.name}
            subheader={item.category}
            onClick={(e) => handleItemClick(e, item)}
          />
          {/* this was for produce
          <CardMedia
            component="img"
            height="194"
            image={item.image_url}
            alt={item.title}
            onClick={(e) => handleItemClick(e, item)}
          /> */}
          <CardContent onClick={(e) => handleItemClick(e, item)}>
            <Typography variant="body2" color="text.secondary">
              {'stock: ' + item.inStock}
            </Typography>
          </CardContent>
          <div className="cardBottom">
          <Typography variant="header3" color="text.secondary">
              {'$' + item.price}
          </Typography>
            <AddShoppingCartIcon className="addcart" onClick={(e) => addCartClick(e, item)} />
          </div>
        </Card>
      ))}
    </ul>
  );
}

export default Products;
