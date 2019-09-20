'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [2,20],
        allowNull: false,
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        min: 4,
      }
    },
    profilepic: {
      type: DataTypes.STRING,
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};