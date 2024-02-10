let encode = (strArr: string[]): string => {
  let result = "";
  strArr.forEach((str) => {
    result += `${str.length}#${str}`;
  });
  return result;
};

let decode = (str: string): string[] => {
  let result: string[] = [];
  let wordLength = "";
  let index = 0;
  while (index < str.length) {
    if (!isNaN(parseInt(str[index]))) {
      wordLength += str[index];
      index++;
    } else if (str[index] === "#") {
      result.push(str.slice(index + 1, index + 1 + parseInt(wordLength)));
      index += parseInt(wordLength) + 1;
      wordLength = "";
    } else index++;
  }
  return result;
};

let test = encode(["apple", "orange", "banana", "grape", "kiwi", "melon"]);
console.log(test);
console.log("------------");
console.log(decode(test));
