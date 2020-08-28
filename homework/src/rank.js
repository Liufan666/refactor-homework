function voyageRisk (voyage) {
  let result = 1;
  if (voyage.length > 4) {
    result += 2;
  }
  if (voyage.length > 8) {
    result += voyage.length - 8;
  }
  if (isVoyageZoneINchinaOReastindies(voyage)) {
    result += 4;
  }
  return Math.max(result, 0);
}

function isVoyageZoneINchinaOReastindies(voyage) {
  return [
    'china',
    'east-indies',
  ].includes(voyage.zone);
}

function hasChina (history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk (voyage, history) {
  let result = 1;
  if (history.length < 5) {
    result += 4;
  }
  result += filterHistory(history);
  if (voyage.zone === 'china' && hasChina(history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

function filterHistory(history) {
  let result = 0;
  result += history.filter(v => v.profit < 0).length;
  return result;
}

function voyageProfitFactor (voyage, history) {
  let result = 2;
  if (voyage.zone === 'china' || voyage.zone === 'east-indies') {
    result += 1;
  }
  if (voyage.zone === 'china' && hasChina(history)) {
    result += getResultWithZoneIsChinaAndHaschanaHistory(history, voyage);
  }
  else {
    result += getResultOtherCase(history,voyage);
  }
  return result;
}

function getResultOtherCase(history,voyage) {
  let result = 0
  if (history.length > 8) {
    result += 1;
  }
  if (voyage.length > 14) {
    result -= 1;
  }
  return result;
}

function getResultWithZoneIsChinaAndHaschanaHistory(history, voyage) {
  let result = 3;
  if (history.length > 10) {
    result += 1;
  }
  if (voyage.length > 12) {
    result += 1;
  }
  if (voyage.length > 18) {
    result -= 1;
  }
  return result;
}

function rating (voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  let result="";
  (vpf * 3 > (vr + chr * 2))? result= 'A':result= 'B';
  return result;
}

module.exports = {voyageRisk,rating,voyageProfitFactor,captainHistoryRisk
};

const voyage = {
  zone: 'west-indies',
  length: 10,
};
const history = [
  {
    zone: 'east-indies',
    profit: 5,
  },{
    zone: 'west-indies',
    profit: 15,
  },{
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
];
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);
