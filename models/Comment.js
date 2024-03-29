const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
    {
        // Defines the columns id, comment_input, date_created, user_id, and review_id
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_input: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        // Foreign Key
        user_id: {
            type: DataTypes.INTEGER,
            // references the user model's id
            references: {
                model: 'user',
                key: 'id',
            },
        },
        // Foreign Key
        review_id: {
            type: DataTypes.INTEGER,
            // references the review model's id
            references: {
                model: 'review',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;