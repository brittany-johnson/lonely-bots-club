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
    Comment.belongsTo(models.Users, {
      as: 'user',
      foreignKey: 'UserId'
    });
    Comment.belongsTo(models.Posts, {
      as: 'comment',
      foreignKey: 'PostId'
    });
  };
  return Comment;
};
