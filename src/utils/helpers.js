export const getIngredients = (meal) => {
    const ingredients = [];
    if (!meal) return ingredients;
    
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      
      if (ingredient && ingredient.trim() !== '') {
        ingredients.push({
          ingredient,
          measure: measure || ''
        });
      }
    }
    return ingredients;
  };
  
  export const formatInstructions = (instructions) => {
    if (!instructions) return [];
    return instructions.split(/\r\n|\r|\n/).filter(step => step.trim() !== '');
  };