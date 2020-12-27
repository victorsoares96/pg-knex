import 'dotenv/config'

import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import routes from './routes'

interface Error {
  status?: number;
  message?: string;
}

class App {
  public express : express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
    this.errorHandler()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private errorHandler (): void {
    // Error Internal Server
    this.express.use((error: Error, req: Request, res: Response, next: NextFunction) => {
      res.status(error.status || 500)
      res.send({ error: error.message })
    })

    // Error Not Found
    this.express.use((req: Request, res: Response, next: NextFunction) => {
      const error: Error = new Error('Not found')
      error.status = 404
      next(error)
    })
  }

  private database (): void {
    /* mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }) */
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
