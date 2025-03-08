const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchMealsByName = async (name) => {
  try {
    const response = await fetch(`${API_BASE_URL}/search.php?s=${name}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching meals by name:', error);
    throw error;
  }
};

export const fetchMealsByIngredient = async (ingredient) => {
  try {
    const response = await fetch(`${API_BASE_URL}/filter.php?i=${ingredient}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching meals by ingredient:', error);
    throw error;
  }
};

export const fetchMealsByCategory = async (category) => {
  try {
    const response = await fetch(`${API_BASE_URL}/filter.php?c=${category}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching meals by category:', error);
    throw error;
  }
};

export const fetchMealsByArea = async (area) => {
  try {
    const response = await fetch(`${API_BASE_URL}/filter.php?a=${area}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching meals by area:', error);
    throw error;
  }
};

export const fetchMealDetails = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching meal details:', error);
    throw error;
  }
};

export const fetchRandomMeal = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/random.php`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching random meal:', error);
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/list.php?c=list`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const fetchAreas = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/list.php?a=list`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching areas:', error);
    throw error;
  }
};