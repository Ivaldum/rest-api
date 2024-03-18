import { Router } from "express";
import { MovieController } from "../controllers/movies.js";

const router = Router()
export const moviesRouter = readJSON('./movies.json')

moviesRouter.get('/', MovieController.getAll)
moviesRouter.get('/:id', MovieController.getById)
moviesRouter.post('/', MovieController.create)
moviesRouter.delete('/:id', MovieController.delete)
moviesRouter.patch('/:id', MovieController.update)
