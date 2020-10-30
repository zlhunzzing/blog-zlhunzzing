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
      res.status(201).json(result);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }

  async addCategoryController(req: TokenReq, res:Response): Promise<void> {
    try {
      const result = await service.addCategoryService();
      res.status(201).json(result);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }

  async putCategoryController(req: TokenReq, res:Response): Promise<void> {
    try {
      const result = await service.putCategoryService(req.params.id, req.body.name);
      res.status(200).json(result);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }

  async deleteCategoryController(req: TokenReq, res:Response): Promise<void> {
    try {
      const result = await service.deleteCategoryService(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }

  async addPostController(req: TokenReq, res:Response): Promise<void> {
    try {
      await service.addPostService(req.body);
      res.status(201).end();
    } catch (err) {
      res.status(409).send(err.message);
    }
  }
}
