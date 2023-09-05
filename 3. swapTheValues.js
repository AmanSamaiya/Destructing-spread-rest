const swapValues = (...values) => {
  [values[1], values[0]] = [values[0], values[1]];

  console.log(values);
};

swapValues(53, 62);
