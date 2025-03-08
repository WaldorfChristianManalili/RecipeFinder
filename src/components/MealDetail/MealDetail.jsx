import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { getIngredients, formatInstructions } from '../../utils/helpers';

const MealDetail = () => {
  const { selectedMeal, setSelectedMeal } = useAppContext();
  
  if (!selectedMeal) return null;
  
  const ingredients = getIngredients(selectedMeal);
  const instructions = formatInstructions(selectedMeal.strInstructions);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <div className="md:flex">
        <div className="md:w-1/2">
          <img
            src={selectedMeal.strMealThumb}
            alt={selectedMeal.strMeal}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        <div className="p-6 md:w-1/2">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{selectedMeal.strMeal}</h2>
              <div className="flex mt-2 mb-4">
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm mr-2">
                  {selectedMeal.strCategory}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {selectedMeal.strArea}
                </span>
              </div>
            </div>
            <button 
              onClick={() => setSelectedMeal(null)} 
              className="text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <h3 className="text-lg font-semibold mb-2 text-gray-700">Ingredients</h3>
          <ul className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-1">
            {ingredients.map((item, index) => (
              <li key={index} className="flex items-center">
                <img 
                  src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(item.ingredient)}-small.png`} 
                  alt={item.ingredient}
                  className="w-8 h-8 mr-2 object-cover rounded-full"
                />
                <span>{item.measure} {item.ingredient}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mb-2 text-gray-700">Instructions</h3>
          <div className="max-h-64 overflow-y-auto mb-4">
            {instructions.map((step, index) => (
              <p key={index} className="mb-2">{step}</p>
            ))}
          </div>

          {selectedMeal.strYoutube && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Video Tutorial</h3>
              <a 
                href={selectedMeal.strYoutube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Watch on YouTube
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MealDetail;