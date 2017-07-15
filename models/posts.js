'use strict';
module.exports = function(sequelize, DataTypes) {
  var posts = sequelize.define('posts', {
    body: DataTypes.TEXT,
    userid:DataTypes.INTEGER
  }, {});

    posts.associate = function(models) {
      posts.belongsTo(models.userinfos, {as : 'userinfos', foreignKey: 'userid'
      })
    }

  return posts;
};
