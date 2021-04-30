const router = require('express').Router();
const {
  models: { Card },
} = require('../db');
module.exports = router;

//api/cards
router.get('/', async (req, res, next) => {
  try {
    if (!req.session.hand) {
      const cards = await Card.findAll();
      const hand = [cards[Math.floor(Math.random() * 52)]];
      cards.forEach((card) => {
        if (!hand.includes(card)) {
          const idx = Math.floor(Math.random() * hand.length);
          hand.splice(idx, 0, card);
        }
      });
      req.session.hand = hand;
    }
    res.json(req.session.hand);
  } catch (err) {
    next(err);
  }
});

router.put('/', async (req, res, next) => {
  try {
    const cards = await Card.findAll();
    const hand = [cards[Math.floor(Math.random() * 52)]];
    cards.forEach((card) => {
      if (!hand.includes(card)) {
        const idx = Math.floor(Math.random() * hand.length);
        hand.splice(idx, 0, card);
      }
    });
    req.session.hand = hand;
    res.json(req.session.hand);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const card = await Card.findByPk(req.params.id);
    card.hidden = false;
    req.session.card = card;
    res.json(req.session.card);
  } catch (err) {
    next(err);
  }
});
