import { Sequelize } from 'sequelize';
import sequelize from '../db_init.js';

const DataTypes = Sequelize.DataTypes

const Category = sequelize.define('categories', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  parent_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
}, {
  underscored: true
});

export default Category;
