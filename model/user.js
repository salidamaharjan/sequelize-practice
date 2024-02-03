const{DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isAlphanumeric: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            len: [8,16],
            isAlphanumeric: true
        }
    }
    
  },
  { sequelize, modelName: "User", timestamps: false }
);

module.exports = User;