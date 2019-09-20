'use strict';
module.exports = (sequelize, DataTypes) => {
  const Club = sequelize.define('Club', {
    name: DataTypes.STRING
  }, {});
  Club.associate = function(models) {
    Club.hasOne(model.User, {
      as: 'founder',
      foreignKey: 'ClubId'
    });
  };
  return Club;
};