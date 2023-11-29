import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import Header from "./components/Header.jsx";
import RootLayout from "./components/RootLayout.jsx";
import Home from "./pages/home/Home.jsx";
import Menu from "./pages/menu/Menu.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

import { fetchCart } from "./store/cart-store.js";

function App() {
  //state to track initial mount/load
  const [initialMount, setInitialMount] = useState(true);

  //redux store cart and dispatch
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  //fetching cart info from local storage on first render
  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  //sending data to local storage with any change to the cart
  useEffect(() => {
    //using initial mount state to not send data on initial mount/load
    if (initialMount) {
      setInitialMount(false);
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const router = createBrowserRouter([
    {
      path: "/", 
      errorElement: <ErrorPage />, 
      children: [
        {index: true, element: <Home />},
        {
          path: "/menu",
          element: <RootLayout />,
          errorElement: <ErrorPage />,
          children: [
            { index: true, element: <Menu /> },
            { path: "checkout", element: <Checkout /> },
          ],
        },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <footer className="attribution">
        <a href="https://www.freepik.com/">Images By Freepik</a>. Coded by{" "}
        <a href="https://github.com/MohammedHelal" target="_blank">
          Mohammed Omar Helal
        </a>
        .
      </footer>
    </>
  );
}

export default App;
