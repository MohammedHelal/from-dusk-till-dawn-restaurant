import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-store";

function CartItem({ cartItem }) {
  const dispatch = useDispatch();

  return (
    <li className="cart-item" key={cartItem.id}>
      <p>{`${cartItem.name} - ${cartItem.itemNumber} x ${cartItem.price}`}</p>
      <div className="cart-item-actions">
        <button onClick={() => dispatch(cartActions.decrement(cartItem.id))}>
          -
        </button>
        <p>{cartItem.itemNumber}</p>
        <button onClick={() => dispatch(cartActions.increment(cartItem.id))}>
          +
        </button>
      </div>
    </li>
  );
}

export default CartItem;
