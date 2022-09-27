const Blog = require('./Blog');
const Comment = require('./Comment');
const User = require('./User');

Blog.belongsTo(User, {
  foreignKey: 'user_id',
});
User.hasMany(Blog, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
  });
  User.hasMany(Comment, {
      foreignKey: 'user_id',
  });
  // Comment.belongsTo(Blog, {
  //   foreignKey: 'blog_id',
  // });
  // Blog.hasMany(Comment, {
  //     foreignKey: 'blog_id',
  //     onDelete: "CASCADE"
  // });

module.exports = { User, Comment, Blog };
