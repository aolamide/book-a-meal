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
  deleteAMeal(req, res) {
    const { id } = req.params;
    const mealsLeft = MealService.deleteAMeal(id);
    return res.json({
      status: 'success',
      data: mealsLeft,
    }).status(200);
  },
  updateAMeal(req, res) {
    const { id } = req.params;
    const updates = req.body;
    const updatedMeal = MealService.updateAMeal(id, updates);
    return res.json({
      status: 'success',
      data: updatedMeal,
    }).status(200);
  },
};

export default MealController;
