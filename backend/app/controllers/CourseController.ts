import {Request, Response} from "express";

class CourseController {
  getById(req: Request, res: Response) {
    res.send('getbyid')
  }
}

export default new CourseController()