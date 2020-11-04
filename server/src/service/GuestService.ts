import { BlogModel } from '../model/BlogModel';
import { CategoryModel } from '../model/CategoryModel';
import { PostModel } from '../model/PostModel';
import { ERROR_MESSAGE } from '../common/errorMessage';

const blogModel = new BlogModel();
const categoryModel = new CategoryModel();
const postModel = new PostModel();

export class GuestService {
  async getInfoService(): Promise<object> {
    try {
      const result = await blogModel.findWithId(1);
      return result;
    } catch (err) {
      throw new Error(ERROR_MESSAGE.NOT_FOUND_INFO);
    }
  }

  async getCategoryService(): Promise<object> {
    try {
      const result = await categoryModel.findAll();
      return result;
    } catch (err) {
      throw new Error(ERROR_MESSAGE.NOT_FOUND_INFO);
    }
  }

  async getPostsService(): Promise<object> {
    try {
      const result = await postModel.findAll();
      return result;
    } catch (err) {
      throw new Error(ERROR_MESSAGE.NOT_FOUND_INFO);
    }
  }

  async getPostService(id): Promise<object> {
    try {
      const result = await postModel.findWithId(id);
      return result;
    } catch (err) {
      throw new Error(ERROR_MESSAGE.NOT_FOUND_INFO);
    }
  }
}
