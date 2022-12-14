const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class videogame extends Model {}

// ToDo: Please review the video criteria below 
videogame.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'videogame',
  }
);

module.exports = videogame;