import { Sequelize } from 'sequelize';
import sequelize from '../db_init.js';
import bcrypt from 'bcrypt';

const saltRounds = 10;

const DataTypes = Sequelize.DataTypes

const hashPassword = (plainPwd) => {
  return bcrypt.hash(plainPwd, saltRounds);
}

const User = sequelize.define('users', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
}, {
  underscored: true,
  hooks: {
    beforeCreate: async (user, options) => {
      const hashedPwd = await hashPassword(user.password) 
      user.password = hashedPwd;
    },
    beforeUpdate: async (user, options) => {
      if (user.password) {
        const hashedPwd = await hashPassword(user.password) 
        user.password = hashedPwd;
      }
    }
  }
});

export default User;
