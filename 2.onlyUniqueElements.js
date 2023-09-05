let numArr = [1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 7, 8, 8, 9, 10];

let sortedNum = new Set();

const sorts = (numArr) => {
  numArr.map((num) => {
    sortedNum.add(num);
  });
  console.log(sortedNum);
};

sorts(numArr);
