/* eslint-disable camelcase */
import { NextFunction, Request, Response } from 'express'

import db from '../database/connection'

export default class ProjectController {
  async index (req: Request, res: Response, next: NextFunction) {
    try {
      const { user_id, page = 1 } = req.query

      const query = db('projects')
        .limit(5)
        .offset((Number(page) - 1) * 5)
        .join('users', 'users.id', '=', 'projects.user_id')
        .select('projects.*', 'users.username')
        .where('users.deleted_at', null)

      const countObj = db('projects').count()

      if (user_id) {
        query
          .where({ user_id })
        countObj.where({ user_id })
      }

      const [count] = await countObj
      res.header('X-Total-Count', String(count.count))

      const results = await query

      return res.json(results)
      // return res.json({ projects, total: count.count })
    } catch (error) {
      next(error)
    }
  }

  async create (req: Request, res: Response, next: NextFunction) {
    try {
      const { title, user_id } = req.body

      await db('projects')
        .insert({ title, user_id })

      return res.status(201).send()
    } catch (error) {
      next(error)
    }
  }

  async update (req: Request, res: Response, next: NextFunction) {
    return res.send()
  }

  async delete (req: Request, res: Response, next: NextFunction) {
    return res.send()
  }
}
