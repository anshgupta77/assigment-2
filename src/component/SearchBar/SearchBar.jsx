const SearchBar = () => {
    return (
      <div className="flex flex-col sm:flex-row items-center gap-4 bg-white shadow-lg p-4 rounded-lg">
        {/* Job Title Input */}
        <input
          type="text"
          placeholder="Search by: Job title, Position, Keyword..."
          className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
        
        {/* Location Input */}
        <input
          type="text"
          placeholder="City, state or country"
          className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        
        {/* Search Button */}
        <button className="bg-orange-500 text-white px-6 py-2 text-sm font-semibold rounded-md hover:bg-orange-600 transition duration-300">
          Find Job
        </button>
      </div>
    );
  };
  
  export default SearchBar;
  
  