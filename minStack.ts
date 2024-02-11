export class MinStack {
  values: number[][];
  minVal: null | number;
  constructor() {
    this.values = [];
    this.minVal = null;
  }

  push(val: number): void {
    if (this.minVal === null || this.minVal! > val) this.minVal = val;
    this.values.push([val, this.minVal!]);
  }

  pop(): void {
    this.values.pop();
    this.minVal = this.values.length
      ? this.values[this.values.length - 1][1]
      : null;
  }

  top(): number | undefined {
    return this.values[this.values.length - 1][0];
  }

  getMin(): number {
    return this.minVal!;
  }
}

var obj = new MinStack();

obj.top();
obj.pop();
console.log(obj.getMin());
console.log(obj);
