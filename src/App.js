import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import NewsList from "./Components/NewsList";

function App() {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSearchTerm("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setCategory("");
    setSearchTerm(event.target.search.value);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-4 py-3 mb-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-2xl font-bold">
            <img src={logo} alt="Logo" className="w-10 h-10" />
          </a>
          <div className="hidden lg:flex items-center gap-6">
            <div className="relative group">
              <button className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700">Categories</button>
              <div className="absolute hidden group-hover:block bg-white text-black shadow-md mt-2 rounded w-40 z-10">
                {['world', 'business', 'technology', 'sports', 'entertainment'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                name="search"
                placeholder="Search"
                className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
              />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="md:col-span-1">
          <h5 className="text-lg font-semibold mb-2">Categories</h5>
          <div className="flex flex-col space-y-2 mb-6">
            {['world', 'business', 'technology', 'sports', 'entertainment'].map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className="text-left hover:underline text-blue-600"
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Contact Us */}
          <div className="mt-8">
            <h5 className="text-lg font-semibold mb-2">Contact Us</h5>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows={3}
                  placeholder="Enter your message"
                  className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </aside>

        {/* News Section */}
        <section className="md:col-span-3">
          <NewsList category={category} searchTerm={searchTerm} />
        </section>
      </div>
    </>
  );
}

export default App;

