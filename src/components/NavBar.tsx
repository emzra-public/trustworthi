import AuthButton from "./AuthButton";
const NavBar = () => {
  return (
    <nav className="fixed start-0 top-0 z-20 w-full bg-stone-300">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 text-black">
        <div className="flex flex-1 justify-start md:order-1">
          <ul className="mt-4 flex flex-col rounded-lg bg-stone-300 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
            <li>
              <a
                href="#"
                className="block rounded px-3 py-2 hover:text-red-800 md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded px-3 py-2 hover:text-red-800 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded px-3 py-2 hover:text-red-800 md:p-0"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <a
          href="https://trustworthi.vercel.app/"
          className="order-2 flex flex-1 items-center justify-center"
        >
          <span className="self-center whitespace-nowrap text-2xl font-semibold">
            Trust<span className="text-red-800">worth</span>i
          </span>
        </a>

        <div className="flex flex-1 justify-end space-x-3 md:order-3 md:space-x-0 rtl:space-x-reverse">
          <AuthButton />
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white p-2 text-sm text-gray-900 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600 md:hidden"
            style={{ backgroundColor: "#ffffff", color: "#000000" }}
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
