'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    
    static associate(models) {
      
      //belongsTo con brand
      Product.belongsTo(models.Brand);

      //belongsTo con category
      Product.belongsTo(models.Category);

      //belongsTo con size
      Product.belongsTo(models.Size);

      //belongsTo con gender
      Product.belongsTo(models.Gender);

      //hasMany con image
      Product.hasMany(models.Image,{

        foreignKey: 'productId',
        as: "images"

      });

      //hasOne con orderDetails
      Product.hasOne(models.OrderDetail,{

        foreignKey: 'productId',
        as: "orderDetails"
      });
      
    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    stock_min: DataTypes.INTEGER,
    stock_max: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
    genderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};