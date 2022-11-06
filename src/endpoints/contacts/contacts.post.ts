import { Request, Response } from 'express'
import { ContactsDao } from '../../dao/_index'
import { success, error } from '../../helper/helper'
const Validator = require('fastest-validator')
import { ContactModel } from '../../sqlz/models/contact'
export function create(req: Request, res: Response) {
  try {
    let validationError = false
    const contact = new ContactModel()
    contact.name = req.body.name
    contact.email = req.body.email
    contact.phone = req.body.phone
    contact.address = req.body.address
    contact.pincode = req.body.pincode
    contact.age = req.body.age
    contact.gender = req.body.gender
    contact.occupation = req.body.occupation
    contact.other = req.body.other
    const schema = {
      name: { type: 'string', min: 3, max: 100 },
      email: { type: 'email', min: 3, max: 50 },
      phone: { type: 'string', max: 15, empty: true, optional: true },
      address: { type: 'string', max: 255, empty: true, optional: true },
      pincode: { type: 'string', max: 255, empty: true, optional: true },
      age: { type: 'number', empty: true, optional: true },
      gender: { type: 'string', max: 10, empty: true, optional: true },
      other: { type: 'object', empty: true, optional: true },
    }
    const v = new Validator()
    const check = v.compile(schema)
    const validationResult = check(contact)
    if (Array.isArray(validationResult)) {
      validationError = true
      return res.status(400).json(error({ success: false, code: 400, message: 'Invalid data', data: validationResult }))
    }
    if (!validationError) {
      return ContactsDao.upsert(contact)
        .then(contact => {
          res.status(200).send(success({ success: true, code: 200, data: contact, message: 'Record insert successfully' }))
        })
        .catch(error => {
          res.status(500).json(error(error))
        })
    }
  } catch (e) {
    res.status(500).json(error(e))
  }
}
