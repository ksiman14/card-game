'use strict';

const values = [
  {
    display_name: 'two',
    value: 2,
  },
  {
    display_name: 'three',
    value: 3,
  },
  {
    display_name: 'four',
    value: 4,
  },
  {
    display_name: 'five',
    value: 5,
  },
  {
    display_name: 'six',
    value: 6,
  },
  {
    display_name: 'seven',
    value: 7,
  },
  {
    display_name: 'eight',
    value: 8,
  },
  {
    display_name: 'nine',
    value: 9,
  },
  {
    display_name: 'ten',
    value: 10,
  },
  {
    display_name: 'jack',
    value: 11,
  },
  {
    display_name: 'queen',
    value: 12,
  },
  {
    display_name: 'king',
    value: 13,
  },
  {
    display_name: 'ace',
    value: 14,
  },
];

const {
  db,
  models: { Card },
} = require('../server/db');

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  const cards = await Promise.all(
    values.map(async (value) => {
      await Card.create({
        ...value,
        suit: 'heart',
        imageUrl: `/cards/${value.value}H`,
      });
      await Card.create({
        ...value,
        suit: 'diamond',
        imageUrl: `/cards/${value.value}D`,
      });
      await Card.create({
        ...value,
        suit: 'spade',
        imageUrl: `/cards/${value.value}S`,
      });
      await Card.create({
        ...value,
        suit: 'club',
        imageUrl: `/cards/${value.value}C`,
      });
    })
  );

  console.log(`seeded ${cards.length} cards per suit`);
  console.log(`seeded successfully`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
