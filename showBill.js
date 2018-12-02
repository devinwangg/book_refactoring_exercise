const fs = require('fs');
const util = require('util');

function statement(invoice, plays) {
  function amountFor(perf, play) {
    let thisAmount = 0;

    switch (play.type) {
      case "tragedy":
        thisAmount = 40000;
        if (perf.audience > 30) {
          thisAmount += 1000 * (perf.audience - 30);
        }
        break;
      case "comedy":
        thisAmount = 30000;
        if (perf.audience > 20) {
          thisAmount += 10000 + 500 * (perf.audience - 20);
        }
        thisAmount += 300 * perf.audience;
        break;
      default:
        throw new Error(`unknown type: ${play.type}`);
    }

    return thisAmount;
  }

  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;
  const format = new Intl.NumberFormat("en-US",
    {
      style: "currency", currency: "USD",
      minimumFractionDigits: 2
    }).format;

  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    let thisAmount = amountFor(perf, play);

    // add volume credits
    volumeCredits += Math.max(perf.audience - 30, 0);
    // add extra credit for every ten comedy attendees
    if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);

    // print line for this order
    result += `  ${play.name}: ${format(thisAmount / 100)} (${perf.audience} seats)\n`;
    totalAmount += thisAmount;
  }
  result += `Amount owed is ${format(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;
  return result;
}

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
