function evalRPN(tokens: string[]): number {
  let result: number = 0;
  let stack: number[] = [];

  tokens.forEach((element) => {
    if (!isNaN(parseInt(element))) stack.push(parseInt(element));
    else {
      let secondOperand = stack.pop();
      let firstOperand = stack.pop();
      if (element === "+") {
        stack.push(firstOperand! + secondOperand!);
      }
      if (element === "/") {
        stack.push(Math.trunc(firstOperand! / secondOperand!));
      }
      if (element === "-") {
        stack.push(firstOperand! - secondOperand!);
      }
      if (element === "*") {
        stack.push(firstOperand! * secondOperand!);
      }
    }
  });
  result = stack[0];

  return result;
}

console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
