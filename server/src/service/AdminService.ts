import jwt from 'jsonwebtoken';
import { ERROR_MESSAGE } from '../common/errorMessage';
import { BlogModel } from '../model/BlogModel';
import { CategoryModel } from '../model/CategoryModel';
import { PostModel } from '../model/PostModel';

const blogModel = new BlogModel();
const categoryModel = new CategoryModel();
const postModel = new PostModel();

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

  async putCategoryService(id, name: any): Promise<object> {
    try {
      const category = await categoryModel.findWithId(id);

      const insertData = {
        ...category,
        name,
      };

      await categoryModel.save(insertData);

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

  async addPostService(data: object): Promise<object> {
    try {
      const insertData = {
        ...data,
      };

      await postModel.save(insertData);

      const result = await postModel.findAll();
      return result;
    } catch (err) {
      throw new Error(ERROR_MESSAGE.NOT_FOUND_INFO);
    }
  }

  async editPostService(data, postId): Promise<object> {
    try {
      const post = await postModel.findWithId(postId);

      const insertData = {
        ...post,
        ...data,
      };

      await postModel.save(insertData);

      const result = await postModel.findAll();
      return result;
    } catch (err) {
      throw new Error(ERROR_MESSAGE.NOT_FOUND_INFO);
    }
  }
}
