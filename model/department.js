const { Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../config/db.js');

class Department extends Model {}

Department.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "department",
    timestamps: false,
    underscored: true
  }
);

module.exports = Department;