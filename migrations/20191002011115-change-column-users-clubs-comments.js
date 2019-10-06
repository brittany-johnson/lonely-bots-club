'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.changeColumn(
     'Users',
     'username', 
     {
       type: Sequelize.STRING,
       allowNull: false
     }
   )
     .then(() => {
       return queryInterface.changeColumn(
         'Users',
         'password',
         {
           type: Sequelize.STRING,
           allowNull: false
         }
       )
     })
     .then(() => {
       return queryInterface.changeColumn(
         'Clubs',
         'name',
         {
          type: Sequelize.STRING,
          allowNull: false
         }
       )
     })
     .then(() => {
      return queryInterface.changeColumn(
        'Comments',
        'body',
        {
          type: Sequelize.STRING,
          allowNull: false
        }
      )
    })
    .then(() => {
      return queryInterface.changeColumn(
        'Comments',
        'PostId',
        {
          type: Sequelize.UUID,
          allowNull: false
        }
      )
    })
    .then(() => {
      return queryInterface.changeColumn(
        'Comments',
        'UserId',
        {
          type: Sequelize.UUID,
          allowNull: false
        }
      )
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Users',
      'username', 
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    )
      .then(() => {
        return queryInterface.changeColumn(
          'Users',
          'password',
          {
            type: Sequelize.STRING,
            allowNull: true
          }
        )
      })
      .then(() => {
        return queryInterface.changeColumn(
          'Clubs',
          'name',
          {
            type: Sequelize.STRING,
            allowNull: true
          }
        )
      })
      .then(() => {
        return queryInterface.changeColumn(
          'Comments',
          'body',
          {
            type: Sequelize.STRING,
            allowNull: true
          }
        )
      })
      .then(() => {
        return queryInterface.changeColumn(
          'Comments',
          'PostId',
          {
            type: Sequelize.UUID,
            allowNull: true
          }
        )
      })
      .then(() => {
        return queryInterface.changeColumn(
          'Comments',
          'UserId',
          {
            type: Sequelize.UUID,
            allowNull: true
          }
        )
      })
  }
};
