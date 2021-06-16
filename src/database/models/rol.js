'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    
    static associate(models) {
      
      //belongsToMany con user
      Rol.belongsToMany(models.User, {

        as: 'users',
        through: 'userRol'
      });
    }
  };
  Rol.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rol',
  });
  return Rol;
};