import {Request, Response} from "express";

import {IUserBaseDocument, User} from "../models/user.model";
import {IToken, newToken} from "../utils/newToken";

class AuthController {
  async login(req: Request, res: Response): Promise<Response> {
    console.log('back login')
    try {
      // checks the user in the database
      const user: IUserBaseDocument = await User.findOne({email: req.body.email}).exec();

      if (!user) {
        return res.status(401).json({message: 'Les identifiants sont incorrects.'})
      } else {
        // checks the password (docs: https://github.com/ranisalt/node-argon2#readme | https://www.npmjs.com/package/argon2)
        try {
          const validPassword: boolean = await user.checkPassword(req.body.password);

          if (!validPassword) {
            return res.status(401).json({message: 'Les identifiants sont incorrects.'})
          } else {
            const token: IToken = newToken(user);
            return res.status(200).json(token)
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