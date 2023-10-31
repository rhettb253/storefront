import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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
  }, [type]);

  const handleItemClick = (e, item) => {
    dispatch(toggleShow()); 
    dispatch(selectedItem(item));
  }

  return (
    <ul>
      {renderedProduce.map((item, idx) => (
        <Card key={idx} onClick={(e) => handleItemClick(e, item)}>
          <CardHeader
            title={item.title}
            subheader={item.type}
          />
          <CardMedia
            component="img"
            height="194"
            image={item.image_url}
            alt={item.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
          <AddShoppingCartIcon className="addcart"/>
        </Card>
      ))}
    </ul>
  );
}

export default Products;
