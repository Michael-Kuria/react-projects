const Header = () => {
  return (
    <header className="flex bg-cyan-400 p-6 justify-between">
      <p className="text-white text-3xl font-semibold cursor-pointer">Ketchup</p>
      <div className="justify-between hidden lg:flex ">
        <ul className="flex gap-20">
          <li className="hover:bg-blue-500 hover:text-white hover:rounded-full p-2">Home</li>
          <li className="hover:bg-blue-500 hover:text-white hover:rounded-full p-2">Pricing</li>
          <li className="hover:bg-blue-500 hover:text-white hover:rounded-full p-2">Docs</li>
          <li className="hover:bg-blue-500 hover:text-white hover:rounded-full p-2">About</li>
        </ul>
      </div>
      <p className="bg-blue-500 p-2 text-white rounded-full font-semibold hidden lg:flex">Demo</p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 lg:hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </header>
  );
};

const SiteHeader = () => {
  return (
    <div className="h-full w-full bg-white">
      <Header />
    </div>
  );
};

export default SiteHeader;
