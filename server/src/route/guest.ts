import * as express from 'express';
import { GuestController } from '../controller/GuestController';

const router: express.Router = express.Router();
const controller = new GuestController();

router.get('/info', controller.getInfoController);

router.get('/category', controller.getCategoryController);

router.get('/posts/:id', controller.getPostsController);

router.get('/post/:id', controller.getPostController);

export default router;
