import { Router } from 'express';

import MealController from '../controllers/meal';

const router = Router();

router.get('/', MealController.fetchAllMeals);
router.post('/', MealController.addMeal);
router.get('/:id', MealController.getSingleMeal);
router.delete('/:id', MealController.deleteAMeal);

export default router;
