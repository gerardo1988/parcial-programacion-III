'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      total: {
        type: Sequelize.DOUBLE
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      stateId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'states',
          key: 'id'
        }
        
      },
      paymentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'payments',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};