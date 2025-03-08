import React from 'react';
import { useAppContext } from '../../context/AppContext';

const Filter = () => {
  const { 
    categories, 
    areas, 
    selectedCategory, 
    setSelectedCategory, 
    selectedArea, 
    setSelectedArea,
    searchMeals,
    getRandomMeal,
    clearFilters
  } = useAppContext();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        {/* SearchBar will be included here in the App component */}
        
        {/* Category Filter */}
        <div>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.strCategory} value={cat.strCategory}>
                {cat.strCategory}
              </option>
            ))}
          </select>
        </div>

        {/* Area/Cuisine Filter */}
        <div>
          <select
            value={selectedArea}
            onChange={(e) => {
              setSelectedArea(e.target.value);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">All Cuisines</option>
            {areas.map((area) => (
              <option key={area.strArea} value={area.strArea}>
                {area.strArea}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={searchMeals}
          className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition"
        >
          Search Recipes
        </button>
        <button
          onClick={getRandomMeal}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
        >
          I'm Feeling Lucky
        </button>
        <button
          onClick={clearFilters}
          className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition"
        >
          Clear Filters
        </button>
      </div>
    </>
  );
};

export default Filter;