import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-store";

function MealItem({ item }) {
  const dispatch = useDispatch();

  function AddToOrder() {
    dispatch(cartActions.addItem(item));
  }

  return (
    <article className="meal-item">
      <img src={`http://localhost:3000/${item.image}`} alt="food image" />
      <h3>{item.name}</h3>
      <p className="meal-item-price">
        ${item.price && parseFloat(item.price).toFixed(2)}
      </p>
      <p className="meal-item-description">{item.description}</p>
      <button className="button meal-item-actions" onClick={AddToOrder}>
        Add To Cart
      </button>
    </article>
  );
}

export default MealItem;
