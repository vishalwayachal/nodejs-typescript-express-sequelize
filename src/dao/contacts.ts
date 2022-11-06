import { Contact } from '../sqlz/models/contact'
const { Op } = require('sequelize')

export function create(contact: any): Promise<any> {
  return Contact
    .create({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      address: contact.address,
      pincode: contact.pincode,
      age: contact.age,
      gender: contact.gender,
      occupation: contact.occupation,
      other: contact.other

    })
}

export function findAll(filter: any): Promise<any> {
  const condition = filter ? { name: { [Op.iLike]: `%${filter}%` } } : null
  return Contact
    .findAll({ where: condition })
}


export function upsert(contact: any): Promise<any> {
  return Contact.findOne({
    where: { email: contact.email }
  })
    .then(contactObj => {
      if (contactObj) {
        return Contact
          .update({
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            address: contact.address,
            pincode: contact.pincode,
            age: contact.age,
            gender: contact.gender,
            occupation: contact.occupation,
            other: contact.other
          }, {
            where: { id: contactObj.id },
            returning: true,
          }).then(contactObj => {
            return contactObj[1][0]
          })
      } else {
        return Contact
          .create({
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            address: contact.address,
            pincode: contact.pincode,
            age: contact.age,
            gender: contact.gender,
            occupation: contact.occupation,
            other: contact.other
          })
      }

    })
}
