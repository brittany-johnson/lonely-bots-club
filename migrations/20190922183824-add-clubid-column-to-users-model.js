'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Users',
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
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Users',
      'ClubId'
    );
  }
};
