'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addConstraint('userinfos', ['username'], {
    type: 'unique',
    name: 'custom_unique_constraint_username'
  });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
