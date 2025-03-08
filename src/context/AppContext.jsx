import React, { createContext, useState, useContext, useEffect } from 'react';
import { 
  fetchCategories,
  fetchAreas,
  fetchMealsByName,
  fetchMealsByIngredient,
  fetchMealsByCategory,
  fetchMealsByArea,
  fetchMealDetails,
  fetchRandomMeal
} from '../services/api';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('name');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedMeal, setSelectedMeal] = useState(null);

  // Fetch categories and areas on load
  useEffect(() => {
    const loadFilters = async () => {
      try {
        const [categoryData, areaData] = await Promise.all([
          fetchCategories(),
          fetchAreas()
        ]);
        
        setCategories(categoryData.meals || []);
        setAreas(areaData.meals || []);
      } catch (err) {
        console.error('Error loading filters:', err);
        setError('Failed to load categories and cuisines. Please refresh the page.');
      }
    };

    loadFilters();
  }, []);

  const searchMeals = async () => {
    setLoading(true);
    setError(null);
    setSelectedMeal(null);
  
    try {
      let data;
  
      if (selectedCategory && selectedArea) {
        // Fetch meals that match BOTH category & cuisine
        const categoryData = await fetchMealsByCategory(selectedCategory);
        const areaData = await fetchMealsByArea(selectedArea);
        const filteredMeals = categoryData.meals.filter(meal =>
          areaData.meals.some(areaMeal => areaMeal.idMeal === meal.idMeal)
        );
  
        data = { meals: filteredMeals };
      } else if (selectedCategory) {
        data = await fetchMealsByCategory(selectedCategory);
      } else if (selectedArea) {
        data = await fetchMealsByArea(selectedArea);
      } else if (searchTerm) {
        if (searchType === 'name') {
          data = await fetchMealsByName(searchTerm);
        } else {
          data = await fetchMealsByIngredient(searchTerm);
        }
      } else {
        const allMeals = [];
        for (let letter of 'abcdefghijklmnopqrstuvwxyz') {
            const response = await fetchMealsByName(letter);
            if (response.meals) {
            allMeals.push(...response.meals);
            }
        }
        data = { meals: allMeals };
      }
  
      if (data && data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
        setError('No meals found. Try a different search term.');
      }
    } catch (err) {
      setError('Error searching for meals. Please try again.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getMealDetails = async (id) => {
    setLoading(true);
    try {
      const data = await fetchMealDetails(id);
      if (data.meals && data.meals.length > 0) {
        setSelectedMeal(data.meals[0]);
      } else {
        setError('Could not find details for this meal.');
      }
    } catch (err) {
      setError('Error fetching meal details. Please try again.');
      console.error('Meal details error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getRandomMeal = async () => {
    setLoading(true);
    setError(null);
    setSelectedMeal(null);
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedArea('');
    
    try {
      const data = await fetchRandomMeal();
      if (data.meals && data.meals.length > 0) {
        setSelectedMeal(data.meals[0]);
        setMeals([data.meals[0]]);
      } else {
        setError('Could not find a random meal. Please try again.');
      }
    } catch (err) {
      setError('Error fetching random meal. Please try again.');
      console.error('Random meal error:', err);
    } finally {
      setLoading(false);
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedArea('');
    setSelectedMeal(null);
    setMeals([]);
    setError(null);
  };

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchType,
        setSearchType,
        meals,
        loading,
        error,
        categories,
        areas,
        selectedCategory,
        setSelectedCategory,
        selectedArea,
        setSelectedArea,
        selectedMeal,
        setSelectedMeal,
        searchMeals,
        getMealDetails,
        getRandomMeal,
        clearFilters
      }}
    >
      {children}
    </AppContext.Provider>
  );
};