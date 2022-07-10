import sequelize from '../db_init.js';
import Product from './product.js';
import Category from './category.js';
import User from './user.js';
import Comment from './comment.js';

const syncSchema = async () => {
  await sequelize.sync({ alter: true });
  console.log("All models were synchronized successfully.");
}

// Associations are defined here
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})
Category.hasMany(Product, {
  foreignKey: 'category_id'
})

Comment.belongsTo(Product, {
  foreignKey: 'product_id'
})
Product.hasMany(Comment, {
  foreignKey: 'product_id'
})

Comment.belongsTo(User, {
  foreignKey: 'user_id'
})
User.hasMany(Comment, {
  foreignKey: 'user_id'
})

// Uncomment this line to force database sync
// syncSchema()

export { Product, Category, User, Comment }
