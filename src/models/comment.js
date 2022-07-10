import { Sequelize } from 'sequelize';
import sequelize from '../db_init.js';

const DataTypes = Sequelize.DataTypes

const Comment = sequelize.define('comments', {
  rating: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
}, {
  underscored: true
});

export default Comment;
