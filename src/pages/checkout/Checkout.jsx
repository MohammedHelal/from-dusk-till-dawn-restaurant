import { useState, useRef } from "react";

import CheckoutForm from "./CheckoutForm";
import Cart from "../../components/cart/Cart";
import Success from "./Success";

import Modal from "../../util/Modal";
import Error from "../../util/Error";

import "./Checkout.css";

export default function Checkout() {
  //error states
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //modal for showing success
  const modal = useRef();

  const openModal = () => {
    setShowError(false);
    modal.current.showModal();
  };

  const closeModal = () => {
    modal.current.close();
  };

  const showErrorFn = (msg) => {
    setErrorMessage(msg);
    setShowError(true);
  };

  return (
    <div className="checkout-container">
      {showError && <Error errorMessage={errorMessage} />}
      <section className="checkout">
        <Cart />
        <CheckoutForm showSuccessMessage={openModal} showError={showErrorFn} />
        <Modal ref={modal}>
          <Success closeModal={closeModal} />
        </Modal>
      </section>
    </div>
  );
}
