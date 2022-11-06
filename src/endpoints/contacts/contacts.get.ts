import { Request, Response } from 'express'
import { ContactsDao } from '../../dao/_index'
import { success, error } from '../../helper/helper'

export function list(req: Request, res: Response) {
  try {
    const name = req.query.name
    return ContactsDao
      .findAll(name)
      .then(contacts => {
        res.status(200).send(success({ success: true, code: 200, data: contacts, message: 'Record fetch successfully' }))
      })
      .catch(error => {
        res.status(500).json(error(error))
      })
  } catch (e) {
    res.status(500).json(error(e))
  }
}
