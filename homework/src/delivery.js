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
  else if (isInMEorNH(anOrder)) {
    deliveryTime = 3;
  }
  else {
    deliveryTime = 4;
  }
  return anOrder.placedOn.plusDays(2 + deliveryTime);
}

function isInMEorNH(anOrder) {
  return [
    'ME',
    'NH',
  ].includes(anOrder.deliveryState);
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
  if (isInMAorCT(anOrder)) {
    deliveryTime = 1;
  }
  else if (isInNYorNH(anOrder)) {
    deliveryTime = 2;
  }
  else {
    deliveryTime = 3;
  }
  return anOrder.placedOn.plusDays(1 + deliveryTime);
}

function isInNYorNH(anOrder) {
  return [
    'NY',
    'NH',
  ].includes(anOrder.deliveryState);
}

function isInMAorCT(anOrder) {
  return [
    'MA',
    'CT',
  ].includes(anOrder.deliveryState);
}

