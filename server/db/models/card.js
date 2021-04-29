const Sequelize = require('sequelize');
const db = require('../db');

const Card = db.define('card', {
  display_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  value: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 14,
    },
  },
});

module.exports(Card);
