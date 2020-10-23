import jwt from 'jsonwebtoken';
import { BlogModel } from '../model/BlogModel';
import { ERROR_MESSAGE } from '../common/errorMessage';

const blogModel = new BlogModel();

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
}
