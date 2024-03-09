// Import models
const User = require('./User');
const Review = require('./Review');
const Comment = require('./Comment');
const Wine = require('./Wine');

// Users have many Reviews
// The HasMany association is used to create a One-To-Many relationship between two models
User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Reviews belong to User
// BelongsTo Association is capable of creating both One-To-One and One-To-Many relationships
Review.belongsTo(User, {
    foreignKey: 'user_id',
});

// Reviews have many Comments
Review.hasMany(Comment, {
    foreignKey: 'review_id',
    onDelete: 'CASCADE'
});

// Comments blong to Reviews
Comment.belongsTo(Review, {
    foreignKey: 'review_id',
});

// Users have many Comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Comments belong to Users
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

// Review has one Wine
Review.hasOne(Wine, {
    foreignKey: 'review_id',
    onDelete: 'CASCADE'
});

// Wine blongs to Review
Wine.belongsTo(Review, {
    foreignKey: 'review_id'
});

// User has one Wine
User.hasOne(Wine, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Wine belongs to User
Wine.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Review, Comment, Wine };


