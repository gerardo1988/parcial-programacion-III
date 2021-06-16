'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRol extends Model {
    
    static associate(models) {
      
    }
  };
  UserRol.init({
    userId: DataTypes.INTEGER,
    rolId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserRol',
  });
  return UserRol;
};