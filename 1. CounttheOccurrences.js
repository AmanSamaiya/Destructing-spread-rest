const word = "This is the string";

const countOcurr = (word) => {
  let mappedwords = new Map();

  let splitWords = [...word];

  let count = 1;

  splitWords.map((letter) => {
    if (mappedwords.has(letter)) {
      count = mappedwords.get(letter) + 1;
      mappedwords.set(letter, count);
    } else {
      mappedwords.set(letter, 1);
    }
  });

  console.log(mappedwords);
};

countOcurr(word);
