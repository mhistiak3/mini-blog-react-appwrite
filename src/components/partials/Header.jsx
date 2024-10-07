export const Header = () => {
  return (
    <div className="bg-gray-900 shadow-lg">
      <nav className="flex justify-between py-4 text-white max-w-[1100px] mx-auto px-3">
        {/* Logo Section */}
        <div className="flex items-center space-x-3  px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300">
          <img src="logo.png" alt="logo" className="w-10" />
          <span className="text-2xl font-bold tracking-wide">MinBlog</span>
        </div>

        {/* Button Section */}
        <div className="flex space-x-4 justify-center items-center">
          <button className="bg-white  px-5 py-2 text-black rounded-md font-semibold transition-colors duration-300">
           Register
          </button>
          <button className="border border-1 px-5 py-2 text-white rounded-md font-semibold transition-colors duration-300">
            LogIn
          </button>
        </div>
      </nav>
    </div>
  );
};
