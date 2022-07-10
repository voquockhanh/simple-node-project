import { Sequelize } from 'sequelize';
import sequelize from '../db_init.js';

const DataTypes = Sequelize.DataTypes

const Product = sequelize.define('products', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  discount: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  description: {
    type: DataTypes.JSON,
    allowNull: false
  },
  rating: {
    type: DataTypes.DOUBLE,
  },
  images: {
    type: DataTypes.JSON,
  },
}, {
  underscored: true
});

export default Product;
