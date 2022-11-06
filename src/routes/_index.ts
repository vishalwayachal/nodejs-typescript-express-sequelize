import * as winston from 'winston'
import { Express, Request, Response } from 'express'
import * as ContactsRoutes from './contacts'

export function initRoutes(app: Express) {
  winston.log('info', '--> Initialisations routes')

  app.get('/api', (req: Request, res: Response) => res.status(200).send({
    message: 'server is running!'
  }))

  ContactsRoutes.routes(app)

  app.all('*', (req: Request, res: Response) => res.boom.notFound())
}
