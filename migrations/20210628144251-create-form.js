'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Forms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      creator: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: Sequelize.DATE(3),
      updatedAt: Sequelize.DATE(3)
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Forms');
  }
};
