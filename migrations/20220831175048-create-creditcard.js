'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('creditcards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      validForm: {
        type: Sequelize.STRING
      },
      untilEnd: {
        type: Sequelize.STRING
      },
      ccv: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('creditcards');
  }
};