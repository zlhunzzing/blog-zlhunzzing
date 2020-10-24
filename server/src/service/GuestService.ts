import { BlogModel } from '../model/BlogModel';
import { CategoryModel } from '../model/CategoryModel';
import { ERROR_MESSAGE } from '../common/errorMessage';

const blogModel = new BlogModel();
const categoryModel = new CategoryModel();

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
      console.log(result);
      return result;
    } catch (err) {
      throw new Error(ERROR_MESSAGE.NOT_FOUND_INFO);
    }
  }
}
