'use strict';
module.exports = (sequelize, DataTypes) => {
  const Club = sequelize.define('Club', {
    name: DataTypes.STRING
  }, {});
  Club.associate = function(models) {
    Club.hasOne(model.Users, {
      as: 'founder',
      foreignKey: 'ClubId'
    });
    Club.belongsToMany(model.Users, {
      as: 'members',
      through: 'Membership',
      foreignKey: 'ClubId'
    })
  };
  return Club;
};