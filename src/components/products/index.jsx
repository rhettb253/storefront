import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
import { toggleShow, selectedItem } from "../../store/selectedItem";
import { Card, CardHeader, CardMedia, CardContent, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Products() {
  const dispatch = useDispatch();
  const produce = useSelector((state) => state.filter.produce);
  const type = useSelector((state) => state.filter.type);
  const [renderedProduce, setRenderedProduce ] = useState(produce);

  useEffect(() => {
    if (type === 'FRUITS') {
      setRenderedProduce(produce.filter(item => item.type === 'fruit'))
    } else if (type === 'VEGETABLES') {
      setRenderedProduce(produce.filter(item => item.type === 'vegetable'))
    } else if (type === 'ALL') setRenderedProduce(produce);
  }, [type, produce]);

  const handleItemClick = (e, item) => {
    dispatch(toggleShow()); 
    dispatch(selectedItem(item));
  }

  const addCartClick = (e, item) => {
    e.target.style.backgroundColor = 'rgb(140, 193, 67)';
    setTimeout(()=> {
      e.target.style.backgroundColor = 'rgba(245, 245, 245, 0.686)';
    }, 250);
    dispatch(addToCart(item));
  }

  return (
    <ul>
      {renderedProduce.map((item, idx) => (
        <Card key={idx} >
          <CardHeader
            title={item.title}
            subheader={item.type}
            onClick={(e) => handleItemClick(e, item)}
          />
          <CardMedia
            component="img"
            height="194"
            image={item.image_url}
            alt={item.title}
            onClick={(e) => handleItemClick(e, item)}
          />
          <CardContent onClick={(e) => handleItemClick(e, item)}>
            <Typography variant="body2" color="text.secondary">
              {item.description}
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
