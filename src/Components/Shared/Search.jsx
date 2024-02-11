import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-1 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        
          <NavLink to="/" className="hover:text-green-600 hidden sm:block text-sm font-semibold pl-4 pr-3 border-r-[1px]">Home</NavLink>
        
          <NavLink to="/allProducts" className="hover:text-green-600 hidden sm:block text-sm font-semibold px-3 border-r-[1px] flex-1 text-center">AllProducts</NavLink>
        
        <div className="hidden sm:block text-sm font-semibold px-3 border-r-[1px] flex-1 text-center">
          <NavLink to='/stores' className="hover:text-green-600">Stores</NavLink>
        </div>
        <div className="hidden sm:block text-sm font-semibold px-3 border-r-[1px] flex-1 text-center">
          <NavLink to="/mensWears" className="hover:text-green-600">mens&Wears</NavLink>
        </div>
        <div className="hidden sm:block text-sm font-semibold px-3 border-r-[1px] flex-1 text-center">
          <NavLink to="/contact" className="hover:text-green-600">Contact</NavLink>
        </div>
        <div className="text-sm px-3 text-gray-600 flex flex-row items-center gap-3 border-r-[1px]">
          <div className="hidden sm:block">
            <NavLink to="/addProduct" className="hover:text-green-600">Add Products</NavLink>
          </div>
          {/* <div className="p-2 bg-rose-500 rounded-full text-white">
           
            <BiSearch size={18} />
          </div> */}
        </div>
        {/* Search button */}
        <div className="relative">
          <input
            type="search"
            name="Search"
            placeholder="Search..."
            className=" w-full py-2 pl-12 pr-4 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 "
          />
          <button className="p-2 bg-rose-500 rounded-full text-white w-8 absolute md:left-2 left-0 bottom-0">
            <BiSearch size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
