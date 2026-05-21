import { Link, NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const navClass = ({ isActive }) =>
  `nav-link px-3 py-2 ${isActive ? "nav-link-active" : ""}`;

function Header() {
  const { setIsCartDisplayed, itemsInCart } = useContext(CartContext);
  const itemCount = itemsInCart?.reduce((sum, item) => sum + Number(item.quantity), 0) ?? 0;

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-cream/90 shadow-header backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src="/assets/logo.png"
            alt="Bull Market Outfitters"
            className="h-10 w-10 rounded-full ring-2 ring-brand-100 transition group-hover:ring-brand-300 sm:h-12 sm:w-12"
          />
          <div className="hidden sm:block">
            <p className="font-display text-lg font-semibold leading-tight text-ink lg:text-xl">
              Bull Market Outfitters
            </p>
            <p className="text-xs font-medium tracking-wide text-brand-600">
              Dress bullish
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          <NavLink to="/shop" className={navClass}>
            Shop
          </NavLink>
          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <nav className="flex md:hidden">
            <NavLink to="/shop" className="nav-link px-2 py-1 text-xs sm:text-sm">
              Shop
            </NavLink>
          </nav>

          <button
            type="button"
            onClick={() => setIsCartDisplayed((prev) => !prev)}
            className="relative rounded-full p-2 text-ink transition hover:bg-brand-50"
            aria-label="Open cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 sm:h-7 sm:w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-brass px-1 text-xs font-bold text-white">
                {itemCount > 9 ? "9+" : itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
