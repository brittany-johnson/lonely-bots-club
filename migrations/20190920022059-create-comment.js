'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Comments', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      body: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    .then(() => {
      return queryInterface.addColumn(
        'Comments',
        'PostId',
        {
          type: Sequelize.UUID,
          references: {
            model: 'Posts',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL', 
        }
      );
    })
    .then(() => {
      return queryInterface.addColumn(
        'Comments',
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
      );
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Comments')
    .then(() => {
      return queryInterface.removeColumn(
        'Comments',
        'UserId'
      );
    })
    .then(() => {
      return queryInterface.removeColumn(
        'Comments',
        'PostId'
      );
    })

  }
};