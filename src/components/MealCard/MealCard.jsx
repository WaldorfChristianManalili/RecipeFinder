import React from 'react';
import { useAppContext } from '../../context/AppContext';

const MealCard = ({ meal }) => {
  const { getMealDetails } = useAppContext();

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:scale-105 hover:shadow-lg"
      onClick={() => getMealDetails(meal.idMeal)}
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{meal.strMeal}</h3>
        {meal.strCategory && (
          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
            {meal.strCategory}
          </span>
        )}
        {meal.strArea && (
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm ml-2">
            {meal.strArea}
          </span>
        )}
      </div>
    </div>
  );
};

export default MealCard;