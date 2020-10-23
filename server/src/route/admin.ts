import * as express from 'express';
import jwt from '../../node_modules/jsonwebtoken';
import { AdminController } from '../controller/AdminController';
import { ERROR_MESSAGE } from '../common/errorMessage';

const router: express.Router = express.Router();
const controller = new AdminController();

const jwtCheck = (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(403).json(err || { message: ERROR_MESSAGE.WRONG_TOKEN });
    } else {
      req.tokenData = decoded;
      next();
    }
  });
};

router.post('/signin', controller.signinController);

router.post('/info', jwtCheck, controller.setInfoController);

export default router;
