import { Outlet } from "react-router-dom";
import React, { useContext } from "react";
import Cart from "./components/Layout/Cart";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { CartContext } from "./contexts/CartContext";

function Layout() {
  const { isCartDisplayed } = useContext(CartContext);

  return (
    <div className="flex min-h-screen flex-col bg-cream bg-grain">
      <Header />
      {isCartDisplayed && <Cart />}
      <main id="content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
