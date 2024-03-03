// Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Import our database connection from config.js
const sequelize = require('../config/connection');
// Initialize Wine model (table) by extending off Sequelize's Model class
class Wine extends Model { }

// Set up fields and rules for User model
Wine.init(
    {
        // Defines columns id, category, brand, type, flavor, user_id, and review_id
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
        category: {
            // Sets data type as String
            type: DataTypes.STRING,
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        flavor: {
            type: DataTypes.STRING,
            allowNull: false,
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
        // Foreign Key
        review_id: {
            type: DataTypes.INTEGER,
            // References the review model's id
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
        modelName: 'wine',
    }
);

module.exports = Wine;