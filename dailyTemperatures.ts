function dailyTemperatures(temperatures: number[]): number[] {
  let monotonicStack: number[] = [0];
  let results: number[] = [];
  for (let index = 0; index < temperatures.length; index++) {
    results.push(0);
  }

  for (let index = 1; index < temperatures.length; index++) {
    let topElementIndex = monotonicStack[monotonicStack.length - 1];
    while (
      temperatures[topElementIndex] < temperatures[index] &&
      monotonicStack.length
    ) {
      results[topElementIndex] = index - topElementIndex;
      monotonicStack.pop();
      topElementIndex = monotonicStack[monotonicStack.length - 1];
    }
    monotonicStack.push(index);
  }

  return results;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
