function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) {
    arr = [];
  }
  if (d == 0) {
    arr.push((b * -1) / (2 * a));
  }

  if (d > 0) {
    arr.push(((b * -1) + Math.sqrt(d)) / (2 * a));
    arr.push(((b * -1) - Math.sqrt(d)) / (2 * a));
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let toCreditDate = new Date(date);
  let today = new Date();
  var months = toCreditDate.getMonth() - today.getMonth() + ((toCreditDate.getFullYear() - today.getFullYear()) * 12);
  let creditBody = amount - contribution;
  let oneTwelve = (percent / 12) / 100;
  var payPerMonth = creditBody * (oneTwelve + oneTwelve / (Math.pow((1 + oneTwelve), months) - 1));
  let totalAmountTest = payPerMonth * months;
  totalAmount = +totalAmountTest.toFixed(2)

  if (isNaN(Number(percent))) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    return totalAmount;
  }
  if (isNaN(Number(contribution))) {
    return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if (isNaN(Number(amount))) {
    return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  return totalAmount;
}
