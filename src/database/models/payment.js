'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
   
    static associate(models) {
      
      //hasOne con order
      Payment.hasOne(models.Order,{

        foreignKey: 'paymentId',
        as: 'orders'

      });
    }
  };
  Payment.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};