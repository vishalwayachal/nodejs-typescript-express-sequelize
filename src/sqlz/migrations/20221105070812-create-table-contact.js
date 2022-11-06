'use strict';
module.exports = {

  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Contacts', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false      
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING(15),
        allowNull: true
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      pincode: {
        type: Sequelize.STRING(15),
        allowNull: true
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      gender: {
        type: Sequelize.STRING(10),
        allowNull: true
      },
      occupation: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      other: {
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  ,
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Contacts')
}
