function generateParenthesis(n: number): string[] {
  let results: string[] = [];

  let backTrack = (pair: string, open: number, close: number, n: number) => {
    if (open === close && open === n) {
      results.push(pair);
      return;
    }
    if (open < n) backTrack(pair + "(", open + 1, close, n);

    if (close < open) backTrack(pair + ")", open, close + 1, n);
  };

  backTrack("", 0, 0, n);

  return results;
}

console.log(generateParenthesis(2));
