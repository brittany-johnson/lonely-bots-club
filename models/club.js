'use strict';
module.exports = (sequelize, DataTypes) => {
  const Club = sequelize.define('Clubs', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
  }, {});
  Club.associate = function(models) {
    Club.hasOne(models.Users, {
      as: 'founder',
      foreignKey: 'ClubId'
    });
    Club.belongsToMany(models.Users, {
      as: 'members',
      through: 'Membership',
      foreignKey: 'ClubId'
    })
  };
  return Club;
};