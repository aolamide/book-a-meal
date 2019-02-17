import { Router } from 'express';

import MenuControllers from '../controllers/menu';

const router = Router();

router.get('/', MenuControllers.getMenu);
router.post('/', MenuControllers.setMenu);

export default router;
