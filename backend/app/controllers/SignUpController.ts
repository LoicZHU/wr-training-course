import {Request, Response} from "express";
import {User} from "../models/user.model";

class SignUpController {
  async signUp(req: Request, res: Response) {
    if (!req.body.email || !req.body.password || req.body.password.length < 8) {
      return res.status(400).json({message: 'Un login et un mot de passe conformes sont requis pour s\'enregistrer.'})
    } else {
      try {
        // const user = await User.create(req.body.email, req.body.password);
        const user = await User.create({email: req.body.email, password: req.body.password});

        return res.status(201).json({message: 'Utilisateur créé !'})
      } catch (error) {
        return res.status(500).json({error: error})
      }
    }
  }
}

export default new SignUpController()