'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Questions', {
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
      prompt: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      type: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      defaultValue: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      canScan: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: Sequelize.DATE(3),
      updatedAt: Sequelize.DATE(3)
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Questions');
  }
};
