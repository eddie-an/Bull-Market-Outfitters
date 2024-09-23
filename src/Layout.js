import { Outlet } from "react-router-dom";
import React, {useContext} from "react";
import Cart from "./components/Layout/Cart";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import {CartContext} from "./contexts/CartContext";

function Layout() {
  const {isCartDisplayed} = useContext(CartContext);

  return (
    <div className="w-full">
    <Header />
    {isCartDisplayed && (
        <Cart/>
      )}
      <div id="content">
        {/* child components get injected here and replace <Outlet /> */}
        <Outlet />
      </div>
      <Footer>Footer</Footer>
    </div>
  );
}

export default Layout;
