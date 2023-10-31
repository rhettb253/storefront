import { useSelector } from "react-redux";
import { Modal, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleShow } from "../../store/selectedItem";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function ProductModal() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.showSelected.selected);
  const show = useSelector((state) => state.showSelected.show);

  const handleClose = () => {
    dispatch(toggleShow());
  };

  return (
    <Modal
      open={show}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card>
        <CardContent>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="modalTop">
              {selected?.title} <AddShoppingCartIcon className="addcart"/>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {selected?.description}
          </Typography>
          <CardMedia
            component="img"
            height="194"
            image={selected?.image_url}
            alt={selected?.title}
          />
        </CardContent>
      </Card>
    </Modal>
  );
}

export default ProductModal;
