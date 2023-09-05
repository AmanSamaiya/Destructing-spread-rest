let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const minMax = (values) => {
  let vals = new Object();

  vals.max = Math.max(...values);
  vals.min = Math.min(...values);

  console.log(vals);
};

minMax(numArr);
