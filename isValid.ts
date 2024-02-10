function isValid(s: string): boolean {
  let stack = [];
  if (s.length === 1) return false;
  for (let index = 0; index < s.length; index++) {
    if (s[index] === "(" || s[index] === "{" || s[index] === "[")
      stack.push(s[index]);
    else {
      let lastItem = stack.pop();

      if (s[index] === ")" && lastItem !== "(") return false;
      if (s[index] === "]" && lastItem !== "[") return false;
      if (s[index] === "}" && lastItem !== "{") return false;
    }
  }
  return !stack.length;
}

console.log(isValid("(]"));
