import { NextFunction, Request, Response } from 'express'

import db from '../database/connection'

export default class UserController {
  async index (req: Request, res: Response) {
    const users = await db('users')
      .where('deleted_at', null)
    return res.json(users)
  }

  async create (req: Request, res: Response, next: NextFunction) {
    try {
      const { username } = req.body

      await db('users')
        .insert({ username })

      return res.status(201).send()
    } catch (error) {
      next(error)
    }
  }

  async update (req: Request, res: Response, next: NextFunction) {
    try {
      const { username } = req.body
      const { id } = req.params

      await db('users')
        .update({ username })
        .where({ id })

      return res.send()
    } catch (error) {
      next(error)
    }
  }

  async delete (req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params

      await db('users')
        .where({ id })
        .update('deleted_at', new Date())

      return res.send()
    } catch (error) {
      next(error)
    }
  }
}
