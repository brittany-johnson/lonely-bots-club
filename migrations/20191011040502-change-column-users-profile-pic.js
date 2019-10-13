'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Users',
      'profilepic',
      {
        type: Sequelize.BLOB
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Users',
      'profilepic',
      {
        type: Sequelize.STRING
      }
    )
  }
};
