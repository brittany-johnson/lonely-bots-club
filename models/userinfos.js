'use strict';
module.exports = function(sequelize, DataTypes) {
  var userinfos = sequelize.define('userinfos', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return userinfos;
};
