'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Likes',
      'Like',
      {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Likes',
      'Like'
    );
  }
};
