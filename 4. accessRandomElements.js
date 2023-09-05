let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sortedNum = (values) => {
  let [first, second, last] = [values[0], values[1], values[values.length - 1]];

  console.log([first, second, last]);
};

sortedNum(numArr);
