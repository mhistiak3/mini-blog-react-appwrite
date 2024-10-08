const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center max-w-2xl p-8">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to MinBlog
        </h1>

        {/* Paragraph */}
        <p className="text-lg text-gray-700 mb-8">
          MinBlog is your go-to platform for sharing and discovering amazing
          stories, articles, and more. Start your blogging journey with us
          today!
        </p>

        {/* Get Started Button */}
        <button className="px-8 py-4 bg-gray-900 text-white font-semibold text-lg rounded-md hover:bg-gray-950 transition duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
}
export default Home