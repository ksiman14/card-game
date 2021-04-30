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
  suit: {
    type: Sequelize.ENUM(['spade', 'heart', 'diamond', 'club']),
    allowNull: false,
  },
  right: {
    type: Sequelize.ENUM(['spade', 'heart', 'diamond', 'club']),
  },
  imageUrl: Sequelize.TEXT,
  hidden: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});

Card.beforeCreate((card) => {
  switch (card.suit) {
    case 'spade':
      card.right = 'club';
      break;
    case 'club':
      card.right = 'spade';
      break;
    case 'heart':
      card.right = 'diamond';
      break;
    case 'diamond':
      card.right = 'heart';
      break;
    default:
      card.right = null;
  }
});

module.exports = Card;
