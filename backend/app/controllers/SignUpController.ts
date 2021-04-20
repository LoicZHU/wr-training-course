import {Request, Response} from "express";

import {IUser, User} from "../models/user.model";
import {IToken, newToken} from "../utils/newToken";

class SignUpController {
  async signUp(req: Request, res: Response): Promise<Response> {
    // checks the existence of the email and the password in the body request
    if (!req.body.email || !req.body.password || req.body.password.length < 8) {
      return res.status(400).json({message: 'Un login et un mot de passe conformes sont requis pour s\'enregistrer.'})
    } else {
      // creates a user, then gives a token
      try {
        const user: IUser = await User.create({email: req.body.email, password: req.body.password});
        const token: IToken = newToken(user)

        return res.status(201).json(token);
      } catch (error) {
        return res.status(500).json({error: error})
      }
    }
  }
}

export default new SignUpController()