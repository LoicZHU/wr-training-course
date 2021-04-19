import {sign} from "jsonwebtoken";
import {IUser} from "../models/user.model";

export interface IToken {
  userId: string,
  access_token: any,
}

/**
 * Creates a token
 * @param user
 */
export function newToken(user: IUser): IToken {
  return {
    userId: user.id,
    access_token: sign(
      { userId: user.id },
      process.env.TOKEN_SECRET_KEY,
      { expiresIn: '20m' },
    ),
  }
}