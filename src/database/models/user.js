'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      
      //belongsToMany con rol
      User.belongsToMany(models.Rol, {

        as: 'rols',
        through: 'userRol'
      });

      //hasMany con order
      User.hasMany(models.Order,{

        foreignKey: 'userId',
        as: "orders"

      });

      //belongsTo con address
      User.belongsTo(models.Address);
    }
  };
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    addressId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};