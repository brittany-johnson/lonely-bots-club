// TODO: userinfos schema needs to be remade so that username input is unique
// TODO: migrate post table and connect post and userinfos models
// TODO: create form to take user input for post that is connected to the database
// TODO: link submitted post to home page so that they display there
'use strict';
module.exports = function(sequelize, DataTypes) {
  var userinfos = sequelize.define('userinfos', {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {});

userinfos.associate = function(models) {
  userinfos.hasMany(models.posts,{foreignKey: 'userid'})
}

  return userinfos;
};
