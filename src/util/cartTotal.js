import { useSelector } from "react-redux";

export function calculateCartTotal() {
  const cart = useSelector((store) => store.cart);

  let total = cart.reduce(
    (acc, cartItem) =>
      acc + parseFloat(cartItem.price) * parseInt(cartItem.itemNumber),
    0
  );

  return parseFloat(total).toFixed(2);
}
