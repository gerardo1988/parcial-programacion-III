'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipping extends Model {
   
    static associate(models) {
      
      //belongsTo con order
      Shipping.belongsTo(models.Order);
      
    }
  };
  Shipping.init({
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shipping',
  });
  return Shipping;
};