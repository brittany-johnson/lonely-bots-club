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
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.Users, {
      as: 'author',
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
