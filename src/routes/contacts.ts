import { Express } from 'express'
import { ContactController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/contacts', ContactController.ContactGet.list)
  app.post('/api/contacts', ContactController.ContactPost.create)

}
