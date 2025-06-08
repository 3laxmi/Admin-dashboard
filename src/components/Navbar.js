
import React from 'react';
import { FaBell, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="ml-[200px] h-16 bg-white shadow-sm px-6 flex items-center justify-between">
      <div className="flex items-center w-1/3">
        <FaSearch className="text-gray-400 mr-2" />
        <input type="text" placeholder="Search..." className="w-full outline-none" />
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <FaBell className="text-gray-600 text-lg" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">3</span>
        </div>
        <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold">AD</div>
      </div>
    </div>
  );
};

export default Navbar;









