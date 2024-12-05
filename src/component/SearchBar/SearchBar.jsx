

  
  
const SearchBar = () => {
    return (
      <div className="flex items-center gap-4 bg-white p-4 rounded-lg w-[80%] border-2 border-black-300 my-7">
       
        <input
          type="text"
          placeholder="Search by: Job title, Position, Keyword..."
          className="flex-1 border border-none outline-none px-4 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
  
       
        <input
          type="text"
          placeholder="City, state or country"
          className="flex-1 border border-none outline-none px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
  
    
        <button className="bg-orange-500 text-white px-6 py-2 text-sm font-semibold rounded-r-md hover:bg-orange-600 transition duration-300">
          Find Job
        </button>
      </div>
    );
  };
  
  export default SearchBar;
  