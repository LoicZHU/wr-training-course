import * as jwt from 'jsonwebtoken';
import {Request, Response} from "express";
import * as argon2 from 'argon2';

import {User} from "../models/user.model";

class AuthController {
  async login(req: Request, res: Response) {
    try {
      // checking the user in the database
      const user = await User.findOne({email: req.body.email}).exec();

      if (!user) {
        return res.status(401).json({message: 'Les identifiants sont incorrects.'})
      } else {
        // checking the password (doc: https://github.com/ranisalt/node-argon2#readme)
        try {
          const validPassword = await argon2.verify(user.password, req.body.password)

          if (validPassword) {
            return res.status(200).json({message: 'Cool ! TODO: Token'})
          } else {
            return res.status(401).json({message: 'Les identifiants sont incorrects.'})
          }
        } catch (error) {
          return res.status(500).json({error: error})
        }
      }
    } catch (error) {
      return res.status(500).json({error: error})
    }
  }
}

export default new AuthController()