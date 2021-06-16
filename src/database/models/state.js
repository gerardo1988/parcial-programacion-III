'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    
    static associate(models) {
      
      //hasOne con order
      State.hasOne(models.Order,{

        foreignKey: 'stateId',
        as: "orders"
      
      });
    }

  };
  State.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'State',
  });
  return State;
};