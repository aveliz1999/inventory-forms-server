'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Responses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      formId: {
        allowNull: false,
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
    return queryInterface.dropTable('Responses');
  }
};
