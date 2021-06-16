'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
   
    static associate(models) {
      
      //hasMany con orderDetail
      Order.hasMany(models.OrderDetail,{

        foreignKey: 'orderId',
        as:"orderDetails"
        
      });

      //belongsTo con user
      Order.belongsTo(models.User);

      //belongsTo con state
      Order.belongsTo(models.State);
      
      //hasOne con shipping
      Order.hasOne(models.Shipping,{

        foreignKey: 'orderId',
        as: "shippings"

      });

      //belongsTo con payment
      Order.belongsTo(models.Payment);
    }
  };
  Order.init({
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    total: DataTypes.DOUBLE,
    userId: DataTypes.INTEGER,
    stateId: DataTypes.INTEGER,
    paymentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};