import { Request } from 'express';

interface TokenData {
  admin: boolean;
  iat: number;
  exp: number;
}

export interface TokenReq extends Request {
  tokenData: TokenData;
}
