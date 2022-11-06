import { Model, STRING, INTEGER, JSON } from 'sequelize'
import { Json } from 'sequelize/types/lib/utils'
import sequelize from './_index'

export class Contact extends Model {
}

export class ContactModel {
  id: number
  name: string
  email: string
  phone: string
  address: string
  pincode: string
  age: number
  gender: string
  occupation: string
  other: Json
  createdAt: Date
  updatedAt: Date
}

Contact.init(
  {
    name: STRING(100),
    email: STRING(50),
    phone: STRING(15),
    address: STRING(50),
    pincode: STRING(50),
    age: INTEGER,
    gender: STRING(10),
    occupation: STRING(100),
    other: JSON
  },
  { sequelize, modelName: 'Contact' }
)


