'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Entities', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      type: {
        type: Sequelize.ENUM('USER', 'SUBSCRIPTION'),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail:true
        },
        unique: true
      },
      newsletter: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      data: {
        type: Sequelize.JSONB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(blah => {
      return blah
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Entities')
      .then(blah => {
        return queryInterface.sequelize.query('DROP TYPE IF EXISTS public."enum_Entities_type" CASCADE;')
      })
  }
}
