import { Request, Response } from 'express';
import { AdminService } from '../service/AdminService';
import { TokenReq } from '../common/interface';

const service = new AdminService();

export class AdminController {
  async signinController(req: Request, res: Response): Promise<void> {
    try {
      const result = await service.signinService(req.body.password);
      res.status(200).json(result);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }

  async setInfoController(req: TokenReq, res:Response): Promise<void> {
    try {
      const result = await service.setInfoService(req.body);
      res.status(201).send(result);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }
}
