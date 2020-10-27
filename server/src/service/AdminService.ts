import jwt from 'jsonwebtoken';
import { BlogModel } from '../model/BlogModel';
import { ERROR_MESSAGE } from '../common/errorMessage';
import { CategoryModel } from '../model/CategoryModel';

const blogModel = new BlogModel();
const categoryModel = new CategoryModel();

export class AdminService {
  async signinService(password: string): Promise<object> {
    if (password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(
        {
          admin: true,
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: '1h',
        },
      );
      return { token };
    }
    throw new Error(ERROR_MESSAGE.WRONG_PASSWORD);
  }

  async setInfoService(info: any): Promise<object> {
    const result = await blogModel.findWithId(1);

    if (info.title) {
      result.title = info.title;
    }
    if (info.intro) {
      result.intro = info.intro;
    }

    await blogModel.save(result);

    return result;
  }

  async addCategoryService(): Promise<object> {
    try {
      await categoryModel.save({});
      const result = await categoryModel.findAll();
      return result;
    } catch (err) {
      throw new Error(ERROR_MESSAGE.NOT_FOUND_INFO);
    }
  }

  async deleteCategoryService(id): Promise<object> {
    try {
      const category = await categoryModel.findWithId(id);
      await categoryModel.delete(category);
      const result = await categoryModel.findAll();
      return result;
    } catch (err) {
      throw new Error(ERROR_MESSAGE.NOT_FOUND_INFO);
    }
  }
}
