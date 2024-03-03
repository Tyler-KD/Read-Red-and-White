// Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Import our database connection from config.js
const sequelize = require('../config/connection');
// Initialize Review model (table) by extending off Sequelize's Model class
class Review extends Model { }

// Sets up fields and rules for Review Model
Review.init(
    {
        // Defines the columns id, title, content, date_created, and user_id
        id: {
            // Sets data type as Integer
            type: DataTypes.INTEGER,
            // Doesn't allow null values
            allowNull: false,
            // Set as primary key
            primaryKey: true,
            // Uses auto increment
            autoIncrement: true,
        },
        title: {
            // Sets data type as a String
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
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
            // References the user model's id
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'review',
    }
);

module.exports = Review;