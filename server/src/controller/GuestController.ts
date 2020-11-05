import { Request, Response } from 'express';
import { GuestService } from '../service/GuestService';

const service = new GuestService();

export class GuestController {
  async getInfoController(req: Request, res: Response): Promise<void> {
    try {
      const result = await service.getInfoService();
      res.status(200).json(result);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }

  async getCategoryController(req: Request, res: Response): Promise<void> {
    try {
      const result = await service.getCategoryService();
      res.status(200).json(result);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }

  async getPostsController(req: Request, res:Response): Promise<void> {
    try {
      const result = await service.getPostsService(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }

  async getPostController(req: Request, res:Response): Promise<void> {
    try {
      const result = await service.getPostService(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }
}
