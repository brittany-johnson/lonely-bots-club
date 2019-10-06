'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Posts',
      'body',
      {
        type: Sequelize.STRING,
        allowNull: false
      }
    )
      .then(() => {
        return queryInterface.changeColumn(
          'Posts',
          'UserId',
          {
            type: Sequelize.UUID,
            allowNull: false
          }
        )
      })
      .then(() => {
        return queryInterface.changeColumn(
          'Posts',
          'ClubId',
          {
            type: Sequelize.UUID,
            allowNull: false
          }
        )
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Posts',
      'body',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    )
      .then(() => {
        return queryInterface.changeColumn(
          'Posts',
          'UserId',
          {
            type: Sequelize.UUID,
            allowNull: true
          }
        )
      })
      .then(() => {
        return queryInterface.changeColumn(
          'Posts',
          'ClubId',
          {
            type: Sequelize.UUID,
            allowNull: true
          }
        )
      })
  }
};
