import { getRepository } from 'typeorm';
import { BlogEntity } from '../entity/BlogEntity';

export class BlogModel {
  async findWithId(id: number) {
    const result = await getRepository(BlogEntity).findOne({
      where: {
        id,
      },
    });

    return result;
  }

  // async save(insertData) {
  //   await getRepository(BlogEntity).save(insertData);
  // }
}
