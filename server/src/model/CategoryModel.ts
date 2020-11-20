import { getRepository } from 'typeorm';
import { CategoryEntity } from '../entity/CategoryEntity';

export class CategoryModel {
  async findAll() {
    const result = await getRepository(CategoryEntity).find();

    return result;
  }

  async findWithId(id: number) {
    const result = await getRepository(CategoryEntity).findOne({
      where: {
        id,
      },
    });
    return result;
  }

  async save(insertData) {
    await getRepository(CategoryEntity).save(insertData);
  }

  async delete(deleteDataId) {
    await getRepository(CategoryEntity).delete(deleteDataId);
  }
}
