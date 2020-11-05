import { getRepository } from 'typeorm';
import { PostEntity } from '../entity/PostEntity';

export class PostModel {
  async findAll() {
    const result = await getRepository(PostEntity).find();

    return result;
  }

  async findWithId(id: number) {
    const result = await getRepository(PostEntity).findOne({
      where: {
        id,
      },
    });
    return result;
  }

  async findWithCategoryId(id: number) {
    const result = await getRepository(PostEntity).findOne({
      where: {
        categoryId: id,
      },
    });
    return result;
  }


  async save(insertData) {
    await getRepository(PostEntity).save(insertData);
  }
}
