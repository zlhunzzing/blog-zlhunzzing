import { getRepository } from 'typeorm';
import { PostEntity } from '../entity/PostEntity';

export class PostModel {
  async findAll() {
    const result = await getRepository(PostEntity).find();

    return result;
  }

  async save(insertData) {
    await getRepository(PostEntity).save(insertData);
  }
}
