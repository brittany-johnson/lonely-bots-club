'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Posts',
      'UserId',
      {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
      .then(() => {
        return queryInterface.addColumn(
          'Posts',
          'ClubId',
          {
            type: Sequelize.UUID,
            references: {
              model: 'Clubs',
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL', 
          }
        );
      })
      .then(() => {
        return queryInterface.addColumn(
          'Users',
          'FounderId',
          {
            type: Sequelize.UUID,
            references: {
              model: 'Clubs',
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL', 
          }
        );
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Posts',
      'UserId'
    )
      .then(() => {
        return queryInterface.removeColumn(
          'Posts',
          'ClubId'
        );
      })
      .then(() => {
        return queryInterface.removeColumn(
          'Users',
          'FounderId'
        );
      })
  }
};
