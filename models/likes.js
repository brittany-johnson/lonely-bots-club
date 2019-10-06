'use strict';
module.exports = (sequelize, DataTypes) => {
    const Like = sequelize.define('Likes', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            autoIncrement: false,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        UserId: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        PostId: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        Like: {
            type: DataTypes.BOOLEAN
        }
    }, {});
    return Like;
};