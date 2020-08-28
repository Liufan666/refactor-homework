function deliveryDate (anOrder, isRush) {
  if (isRush) {
    return getDaysWithIsRushIsTrue(anOrder);
  }
  else {
    return getDaysWithIsRushIsFalse(anOrder);
  }
}

module.exports = {deliveryDate};
function getDaysWithIsRushIsFalse(anOrder) {
  let deliveryTime;
  if (isInMAorCTorNY(anOrder)) {
    deliveryTime = 2;
  }
  else if ([
    'ME',
    'NH',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 3;
  }
  else {
    deliveryTime = 4;
  }
  return anOrder.placedOn.plusDays(2 + deliveryTime);
}

function isInMAorCTorNY(anOrder) {
  return [
    'MA',
    'CT',
    'NY',
  ].includes(anOrder.deliveryState);
}

function getDaysWithIsRushIsTrue(anOrder) {
  let deliveryTime;
  if ([
    'MA',
    'CT',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 1;
  }
  else if ([
    'NY',
    'NH',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  }
  else {
    deliveryTime = 3;
  }
  return anOrder.placedOn.plusDays(1 + deliveryTime);
}

