'use strict';
const { randBook } = require('@ngneat/falso');

async function makeNewBooks() {
  const array = [];

  for (let i = 0; i < 1000; i++) {
      let newBook = randBook(); // object
      let bookOject = {
          title: newBook.title,
          author: newBook.author,
          category: newBook.category,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
      }

      array.push(bookOject);
  }

  return array;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let bookData = await makeNewBooks();
    await queryInterface.bulkInsert('books', bookData);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('books', null);
  }
};