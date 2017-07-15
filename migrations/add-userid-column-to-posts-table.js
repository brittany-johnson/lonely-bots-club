'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
  'posts',
  'userid',
  {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
          model: "userinfos",
          key: "id"
        }
  }
)
  },

  down: function (queryInterface, Sequelize) {
  return queryInterface.removeColumn(
    'posts',
    'userid'
  )
  }
};
