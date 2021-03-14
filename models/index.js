const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//=====//DEFINING USER AND POST RELATIONSHIPS//=====//
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});


//=====//DEFINING THE COMMENT RELATIONSHIPS//=====//
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };