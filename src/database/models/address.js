'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
   
    static associate(models) {
      
      //hasOne con user
      Address.hasOne(models.User,{

        foreignKey:'addressId',
        as: "users"

      });
    }
  };
  Address.init({
    street: DataTypes.STRING,
    number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};