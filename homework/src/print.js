function printOwing(invoice) {
  let outstanding = 0;
  outstanding = calculateOutstanding(invoice, outstanding);
  recordDueDate(invoice);
  return printDetails(invoice, outstanding);
}

module.exports = {
  printOwing,
};

function printDetails(invoice, outstanding) {
  let result = '***********************\n' +
    '**** Customer Owes ****\n' +
    '***********************\n' +
    `name: ${invoice.customer}\n` +
    `amount: ${outstanding}\n` +
    `amount: ${invoice.dueDate.toLocaleDateString()}\n`;
  console.log(result);
  return result;
}

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
