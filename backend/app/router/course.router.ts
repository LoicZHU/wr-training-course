import {Router} from "express";
import CourseController from "../controllers/CourseController";

const router: Router = Router();

router.route('/')
  .get(CourseController.getById)

export default router;