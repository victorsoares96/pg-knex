import { Router } from 'express'

import ProjectController from './controllers/ProjectController'
import UserController from './controllers/UserController'

const routes = Router()
const usersControllers = new UserController()
const projectsControllers = new ProjectController()

// Users
routes.get('/users', usersControllers.index)
routes.post('/users', usersControllers.create)
routes.put('/users/:id', usersControllers.update)
routes.delete('/users/:id', usersControllers.delete)

// Projects
routes.get('/projects', projectsControllers.index)
routes.post('/projects', projectsControllers.create)
routes.put('/projects/:id', projectsControllers.update)
routes.delete('/projects/:id', projectsControllers.delete)

export default routes
