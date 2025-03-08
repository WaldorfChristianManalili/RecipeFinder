import React from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Filter from './components/Filter/Filter';
import MealCard from './components/MealCard/MealCard';
import MealDetail from './components/MealDetail/MealDetail';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import { useAppContext } from './context/AppContext';

// Internal component that uses the context
const RecipeFinderContent = () => {
  const { 
    meals, 
    loading, 
    error, 
    selectedMeal
  } = useAppContext();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow max-w-6xl mx-auto px-4 py-8 w-full">
        <Header />

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="w-full mb-4">
            <SearchBar />
          </div>
          <div className="w-full mb-4">
            <Filter />
          </div>
        </div>

        {loading && <LoadingSpinner />}

        {error && (
          <div className="text-center py-4 text-red-500">
            {error}
          </div>
        )}

        {selectedMeal && <MealDetail />}

        {!selectedMeal && meals.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Found {meals.length} Recipe{meals.length !== 1 ? 's' : ''}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {meals.map((meal) => (
                <MealCard key={meal.idMeal} meal={meal} />
              ))}
            </div>
          </div>
        )}

        {!loading && !error && meals.length === 0 && !selectedMeal && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">Search for recipes</h3>
            <p className="mt-1 text-gray-500">Use the search bar or filters above to find delicious recipes!</p>
          </div>
        )}
      </div>

      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <p>Recipe Finder | Powered by TheMealDB API | Made by Waldorf Christian</p>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <RecipeFinderContent />
    </AppProvider>
  );
};

export default App;