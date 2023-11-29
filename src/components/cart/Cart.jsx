import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import CartItem from "./CartItem";
import { calculateCartTotal } from "../../util/cartTotal";
import Error from "../../util/Error";

function Cart({ modalOrNot, closeModal }) {
  //Error states
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //redux store
  const cart = useSelector((store) => store.cart);
  //react router navigation for error handling
  const navigate = useNavigate();

  function checkoutErrorHandler() {
    //check if cart is empty before going to checkout
    if (cart.length > 0) {
      navigate("checkout");
      closeModal();
      return;
    }

    showErrorFn("Please select some items to proceed.");
  }

  const showErrorFn = (msg) => {
    setErrorMessage(msg);
    setShowError(true);
  };

  return (
    <div className="cart">
      {showError && <Error errorMessage={errorMessage} />}
      <div>
        {!modalOrNot && (
          <Link to="/menu">
            <button className="button">Back to Menu</button>
          </Link>
        )}
        <h2>Your Cart</h2>
        <ul>
          {cart.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </ul>
      </div>
      <div className="bottom-part">
        <div className="cart-total">
          <p>Total</p>
          <p>${calculateCartTotal()}</p>
        </div>
        {modalOrNot && (
          <form method="dialog" className="modal-actions">
            <button className="text-button" onClick={() => setShowError(false)}>
              Close
            </button>
            <button
              type="button"
              className="button"
              onClick={checkoutErrorHandler}
            >
              Go To Checkout
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Cart;
