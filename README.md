# **Recipe Finder**  
A simple and intuitive **recipe search application** that allows users to explore various meals, filter by category or cuisine, and discover new recipes using **TheMealDB API**.  

![Alt Text](public\website.png)

## **Features**  

### **Search Recipes by Name or Ingredient**  
- Enter a meal name or ingredient to find matching recipes.  
- Uses TheMealDB API to fetch relevant results.  

### **Filter by Category & Cuisine**  
- Select a **meal category** (e.g., Seafood, Vegetarian, Dessert).  
- Choose a **cuisine/area** (e.g., Italian, Japanese, Mexican).  
- Dynamically updates results based on selected filters.   

### **View Detailed Meal Information**  
- Click on any meal to see:  
  - Ingredients & measurements  
  - Step-by-step cooking instructions  
  - Meal image for reference  

### **Clear Filters & Reset Search**  
- Reset search results and filters with one click.  

### **Random Meal Generator**  
- Feeling adventurous? Click **"I'm Feeling Lucky"** to get a **random meal suggestion**. 

---

## **Technologies Used**  
- **React** (Hooks, Context API)  
- **Tailwind CSS** (for styling)  
- **TheMealDB API** (for recipe data)  

---

## **Getting Started**  
1. **Clone the repository:**  
   ```bash
   git clone https://github.com/WaldorfChristianManalili/RecipeFinder.git
   ```
2. **Install dependencies:**  
   ```bash
   npm install
   ```
3. **Start the development server:**  
   ```bash
   npm start
   ```
4. **Open your browser:**  
   - Visit 👉 `http://localhost:3000`

---

## **API Information**  
- This project uses **TheMealDB API** to fetch recipe data.  
**[TheMealDB API Documentation](https://www.themealdb.com/api.php)**  

---

## **Future Enhancements**  
- Save favorite recipes  
- Create meal plans  
- Add nutrition information  
- Shopping list generator  