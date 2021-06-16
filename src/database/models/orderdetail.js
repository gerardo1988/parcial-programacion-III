'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    
    static associate(models) {
      
      //belongsTo con order
      OrderDetail.belongsTo(models.Order);

      //belongsTo con product
      OrderDetail.belongsTo(models.Product);
    }
    
  };
  OrderDetail.init({
    quantity: DataTypes.DOUBLE,
    subtotal: DataTypes.DOUBLE,
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderDetail',
  });
  return OrderDetail;
};