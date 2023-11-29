import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-store";

import { calculateCartTotal } from "../../util/cartTotal";
import { sendOrderInfo } from "../../util/http";
import {
  isNameValid,
  isEmailValid,
  isAddressValid,
  isPostalValid,
  isCityValid,
} from "../../util/form-validation";

const errorStyle = {
  color: "red",
  margin: 0,
};

function CheckoutForm({ showSuccessMessage, showError }) {
  const [formErrors, setFormErrors] = useState({
    nameError: false,
    emailError: false,
    streetError: false,
    postalError: false,
    cityError: false,
  });

  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  function handleChange(e) {
    let id = e.target.id;
    if (id === "name") {
      setFormErrors((prevState) => ({ ...prevState, nameError: false }));
    }
    if (id === "email") {
      setFormErrors((prevState) => ({ ...prevState, emailError: false }));
    }
    if (id === "street") {
      setFormErrors((prevState) => ({ ...prevState, streetError: false }));
    }
    if (id === "postal-code") {
      setFormErrors((prevState) => ({ ...prevState, postalError: false }));
    }
    if (id === "city") {
      setFormErrors((prevState) => ({ ...prevState, cityError: false }));
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    //validations
    if (!isNameValid(data.name)) {
      setFormErrors((prevState) => ({ ...prevState, nameError: true }));
    }
    if (!isEmailValid(data.email)) {
      setFormErrors((prevState) => ({ ...prevState, emailError: true }));
    }
    if (!isAddressValid(data.street)) {
      setFormErrors((prevState) => ({ ...prevState, streetError: true }));
    }
    if (!isPostalValid(data["postal-code"])) {
      setFormErrors((prevState) => ({ ...prevState, postalError: true }));
    }
    if (!isCityValid(data.city)) {
      setFormErrors((prevState) => ({ ...prevState, cityError: true }));
    }

    if (
      !isNameValid(data.name) ||
      !isEmailValid(data.email) ||
      !isAddressValid(data.street) ||
      !isPostalValid(data["postal-code"]) ||
      !isCityValid(data.city)
    ) {
      return;
    }
    //sending cart Data
    if (cart.length > 0) {
      let res = await sendOrderInfo(cart, data);
      if (res.success) {
        dispatch(cartActions.clear());
        showSuccessMessage();

        return;
      } else {
        showError(res.error.message);
      }
    }

    showError("Please select some items to proceed.");
  }

  return (
    <form className="cart" onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <p>Total Amount: ${calculateCartTotal()}</p>
      <div className="control">
        <label htmlFor="name">Full Name</label>
        <input id="name" name="name" type="text" onChange={handleChange} />
        {formErrors.nameError && <p style={errorStyle}>Name can't be empty.</p>}
      </div>
      <div className="control">
        <label htmlFor="email">E-mail Address</label>
        <input id="email" name="email" type="email" onChange={handleChange} />
        {formErrors.emailError && (
          <p style={errorStyle}>Please enter a valid e-mail address.</p>
        )}
      </div>
      <div className="control">
        <label htmlFor="street">Address</label>
        <input id="street" name="street" type="text" onChange={handleChange} />
        {formErrors.streetError && (
          <p style={errorStyle}>Address can't be empty.</p>
        )}
      </div>
      <div className="control-row">
        <div className="control">
          <label htmlFor="postal-code">Postal Code</label>
          <input
            id="postal-code"
            name="postal-code"
            type="text"
            onChange={handleChange}
          />
          {formErrors.postalError && (
            <p style={errorStyle}>Postal code can't be empty.</p>
          )}
        </div>
        <div className="control">
          <label htmlFor="city">City</label>
          <input id="city" name="city" type="text" onChange={handleChange} />
          {formErrors.cityError && (
            <p style={errorStyle}>City can't be empty.</p>
          )}
        </div>
      </div>
      <div className="modal-actions">
        <button type="submit" className="checkout-btn">
          Submit Order
        </button>
      </div>
    </form>
  );
}

export default CheckoutForm;
