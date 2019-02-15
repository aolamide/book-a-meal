import Meal from '../models/meal';
import placeholderData from '../utils/placeholderData';

const MealService = {
  fetchAllMeals() {
    const allMeals = placeholderData.meals.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      newMeal.imageUrl = meal.imageUrl;
      return newMeal;
    });
    return allMeals;
  },
  addMeal(meal) {
    const existingLength = placeholderData.meals.length;
    const highestId = placeholderData[existingLength - 1].id;
    const newId = highestId + 1;
    const newMeal = new Meal();
    newMeal.id = newId;
    newMeal.name = meal.name;
    newMeal.size = meal.size;
    newMeal.price = meal.price;
    newMeal.imageUrl = meal.imageUrl;
    placeholderData.meals.push(newMeal);
    return newMeal;
  },
  getSingleMeal(id) {
    const singleMeal = placeholderData.meals.find(meal => meal.id === id);
    return singleMeal || {};
  },
};

export default MealService;