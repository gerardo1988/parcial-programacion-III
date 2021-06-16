'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    
    static associate(models) {

      //hasMany con product
      Size.hasMany(models.Product,{

        foreignKey='sizeId',
        as:"products"
      });
      
    }
  };
  Size.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Size',
  });
  return Size;
};