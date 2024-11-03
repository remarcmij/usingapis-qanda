// import { AsyncPromise as Promise } from '../lib/async-promise.js';

const partsCatalog = {
  nut: 0.02,
  bolt: 0.05,
  nail: 0.01,
};

function getPriceQuotation({ part, qty }) {
  return new Promise((resolve, reject) => {
    const unitPrice = partsCatalog[part];
    if (unitPrice) {
      resolve(unitPrice * qty);
    } else {
      reject(new Error(`Not in catalog: ${part}`));
    }
  });
}

function computeItemPrice(lineItems) {
  const promises = lineItems.map((lineItem) => getPriceQuotation(lineItem));
  return Promise.all(promises)
    .then((results) => {
      console.log('results', results);
      return results.reduce((acc, price) => acc + price);
    })
    .catch((err) => {
      console.log('Error', err.message);
    });
}

async function computeTotalPrice() {
  const lineItems = [
    { part: 'nut', qty: 100 },
    { part: 'bolt', qty: 100 },
    { part: 'nail', qty: 500 },
  ];

  const total = await computeItemPrice(lineItems);

  console.log(`Total price of this order: EUR ${total}`);
}

computeTotalPrice();
