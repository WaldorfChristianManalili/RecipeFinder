import React from 'react';
import { useAppContext } from '../../context/AppContext';

const SearchBar = () => {
  const { 
    searchTerm, 
    setSearchTerm, 
    searchType, 
    setSearchType 
  } = useAppContext();

  return (
    <div className="md:col-span-2">
      <div className="flex flex-col space-y-2">
        <div className="flex">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={searchType === 'name' ? "Enter meal name..." : "Enter ingredient..."}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="px-3 py-2 bg-gray-100 border border-gray-300 border-l-0 rounded-r focus:outline-none"
          >
            <option value="name">Meal Name</option>
            <option value="ingredient">Ingredient</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;