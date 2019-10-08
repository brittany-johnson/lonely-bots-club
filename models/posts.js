'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Posts', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
    body: DataTypes.STRING,
    Author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.Users, {
      as: 'user',
      foreignKey: 'UserId'
    });
    Post.belongsTo(models.Clubs, {
      as: 'post',
      foreignKey: 'ClubId'
    });
    Post.belongsToMany(models.Users, {
      as: 'likes',
      through: 'Likes',
      foreignKey: 'PostId',
    })
  };
  return Post;
};
