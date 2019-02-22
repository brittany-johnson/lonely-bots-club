'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    // queryInterface.changeColumn(
    //   'userinfos',
    //   'username',
    //   {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //   }
    // ),
    return queryInterface.changeColumn(
      'userinfos',
      'password',
      {
        type: Sequelize.STRING,
        allowNull: false,
      }
    )
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
