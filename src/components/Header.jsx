import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Modal from "../util/Modal";
import Cart from "./cart/Cart";

function Header() {
  const [modalOrNot, setModalOrNot] = useState(false);
  const modal = useRef();
  const cart = useSelector((store) => store.cart);

  const closeModal = () => {
    setModalOrNot(false);
    modal.current.close();
  };

  const openModal = () => {
    setModalOrNot(true);
    modal.current.showModal();
  };

  return (
    <header id="main-header">
      <Link to="/">
        <h1 id="title">
          <img src="./src/assets/logo.jpg" alt="logo" />
          From Dusk Till Dawn
        </h1>
      </Link>
      <button className="text-button" onClick={openModal}>
        Cart ({cart.length})
      </button>
      <Modal ref={modal}>
        <Cart modalOrNot={modalOrNot} closeModal={closeModal} />
      </Modal>
    </header>
  );
}

export default Header;
