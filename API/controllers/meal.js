import MealService from '../services/meal';

const MealController = {
  fetchAllMeals(req, res) {
    const allMeals = MealService.fetchAllMeals();
    return res.json({
      status: 'success',
      data: allMeals,
    }).status(200);
  },
  addMeal(req, res) {
    const newMeal = req.body;
    const createdMeal = MealService.addMeal(newMeal);
    return res.json({
      status: 'success',
      data: createdMeal,
    }).status(201);
  },
  getSingleMeal(req, res) {
    const { id } = req.params;
    const retrievedMeal = MealService.getSingleMeal(id);
    return res.json({
      status: 'success',
      data: retrievedMeal,
    }).status(200);
  },
};

export default MealController;
