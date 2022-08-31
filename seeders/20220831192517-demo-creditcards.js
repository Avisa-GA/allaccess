'use strict';
const { randCreditCard } = require('@ngneat/falso');
const db = require('../models');

/*
fullName: DataTypes.STRING,
brand: DataTypes.STRING,
validFrom: DataTypes.STRING,
untilEnd: DataTypes.STRING,
ccv: DataTypes.STRING,
number: DataTypes.STRING
*/

// create 1000 creditcards and place into our database
async function makeNewCreditCards() {
  const array = [];

  for (let i = 0; i < 1000; i++) {
    let newCard = randCreditCard(); // object
    let cc = {
      fullName: newCard.fullName,
      brand: newCard.brand,
      untilEnd: newCard.untilEnd,
      ccv: newCard.ccv,
      number: newCard.number,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    array.push(cc);
  }

  return array;
}
module.exports = {
  async up (queryInterface, Sequelize) {
     // created the data
    const creditCardData = await makeNewCreditCards();
    // seeding the database
    await queryInterface.bulkInsert('creditcards', null);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('creditcards', null);
  }
};
