function compareArrays(arr1, arr2) {
  let result = false;

  result = arr1.every(function (element) {
    if (arr2[element] != arr1[element]) {
      return false;
    } else {
      return true;
    }
  });

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = [];

  resultArr = arr.filter(item => item > 0).filter(item => item % 3 === 0).map(item => item * 10)

  return resultArr; // array
}
