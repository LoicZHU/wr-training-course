import {NextFunction, Request, Response} from "express";
import {verify} from 'jsonwebtoken';
import { LeanDocument } from "mongoose";

import {IUser, User} from "../models/user.model";

export async function auth(req: Request, res: Response, next: NextFunction): Promise<Promise<Response> | Promise<void>> {
  const errorMessage: string = 'Vous n\'êtes pas authentifié.';
  const bearer: string = req.headers.authorization;

  // checking the "Bearer" string in req.headers.authorization
  if (!bearer || !bearer.startsWith('Bearer ')) {
    return res.status(401).json({message: errorMessage})
  } else {
    let payload;
    const token: string = bearer.split('Bearer ')[1].trim();

    // verify token
    try {
      verify(token, process.env.TOKEN_SECRET_KEY, (err, decodedToken) => {
        if (err) {
          return res.status(401).json({message: errorMessage});
        } else {
          payload = Object.assign({}, decodedToken);
        }
      })
    } catch (error) {
      return res.status(401).json({error: error || errorMessage});
    }

    if (!payload) {
      return res.status(401).json({message: errorMessage});
    } else {
      // checking the user in the database
      const user: LeanDocument<IUser> = await User.findById(payload.userId)
        .select('-password')
        .lean()
        .exec();

      if (!user) {
        return res.status(401).json({message: errorMessage});
      } else {
        // @ts-ignore
        req.user = user;
        return next()
      }
    }
  }
}