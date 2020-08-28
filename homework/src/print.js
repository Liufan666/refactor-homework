function printOwing(invoice) {
  let outstanding = 0;

  // calculate outstanding
  outstanding = calculateOutstanding(invoice, outstanding);

  // record due date
  recordDueDate(invoice);

  // print details
  let result = '***********************\n' +
    '**** Customer Owes ****\n' +
    '***********************\n' +
    `name: ${invoice.customer}\n` +
    `amount: ${outstanding}\n` +
    `amount: ${invoice.dueDate.toLocaleDateString()}\n`;
  console.log(result);
  return result;
}

module.exports = {
  printOwing,
};

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function calculateOutstanding(invoice, outstanding) {
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}
