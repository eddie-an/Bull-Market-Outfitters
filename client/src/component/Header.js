function Header({ setIsCartDisplayed }) {
    return (
      <div className="sticky top-0 w-full z-40 border-b border-gray-200 h-16 bg-gray-100 shadow-sm flex items-center justify-between px-8">
        <div className="flex items-center">
          <h1 className="text-3xl font-semibold text-gray-800 tracking-tight">
            ShopEase
          </h1>
          <span className="ml-4 px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs tracking-wide font-medium">
            NEW
          </span>
        </div>
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search items..."
            className="w-full rounded-full px-4 py-2 bg-gray-50 text-gray-700 focus:outline-none"
          />
          <button
            className="absolute right-2 top-2 text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-4a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" />
            </svg>
          </button>
        </div>
        <svg
          onClick={() => setIsCartDisplayed((prev) => !prev)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-gray-700 hover:text-gray-900 cursor-pointer transition duration-300 ease-in-out"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </div>
    );
  }
  

export default Header;