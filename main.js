const fs = require('fs');
const util = require('util');

const statement = require('./showBill');

const readFilePromise = util.promisify(fs.readFile);

async function readPlays() {
  return await readFilePromise('plays.json', 'utf8');
}

async function readInvoices() {
  return await readFilePromise('invoices.json', 'utf8');
}

async function main() {

  const playsJSON = await readPlays();
  const invoicesJSON = await readInvoices();

  const plays = JSON.parse(playsJSON);

  const invoices = JSON.parse(invoicesJSON);
  Array.from(invoices).forEach(invoice => {
    const result = statement(invoice, plays);
    console.log(result);
  });
};

main();
