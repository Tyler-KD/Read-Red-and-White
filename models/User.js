// Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Import bcrypt
const bcrypt = require('bcrypt');
// Import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize User model (table) by extending off Sequelize's Model class
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// Set up fields and rules for User model
User.init(
    {
        // Defines columns id, username, email, and password
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
        username: {
            // Sets data type as String
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            // The len validation property validates password length of 8 characters or greater
            validate: {
                len: [8],
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;