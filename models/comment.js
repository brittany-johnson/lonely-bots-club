'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comments', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
    body: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, {
      as: 'author',
      foreignKey: 'UserId'
    });
    Comment.belongsTo(models.Post, {
      as: 'comment',
      foreignKey: 'PostId'
    });
  };
  return Comment;
};
