import { Button } from "react-bootstrap";
import classes from "./styles.module.css";
import {useDispatch} from 'react-redux';
import { addCart } from "../../store/reducers/cartSlice";

const BookListItem = ({ book }) => {
    const { id, title, author, price, imgUrl } = book;
    const dispatch = useDispatch();

    const onAddToCart = async () => {
     const book = {id, title, count: 1, price: price,total: price, author,}
           dispatch(addCart(book));
    }
  return (
  <li className={classes.list_item}>
    <div className={classes.list_item_cover}> 
        <img src={imgUrl} alt="book" />
    </div>

    <div className={classes.list_item_details}>
        <h4>{title}</h4>
        <div>{author}</div>
        <div className={classes.list_item_price}>{price}$</div>
        <Button onClick={onAddToCart}>Add to cart</Button>
    </div>
  </li>
  );
};

export default BookListItem