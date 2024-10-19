// Credit: @larsw

class Calculator {
  constructor(initialValue = 0) {
    this.value = initialValue;
  }

  add(n) {
    this.value += n;
    return this;
  }

  subtract(n) {
    this.value -= n;
    return this;
  }

  multiply(n) {
    this.value *= n;
    return this;
  }

  divide(n) {
    if (n === 0) throw new Error('Cannot divide by zero');
    this.value /= n;
    return this;
  }

  getResult() {
    return this.value;
  }
}

const result = new Calculator(10)
  .add(5)
  .multiply(2)
  .subtract(8)
  .divide(2)
  .getResult();

console.log(result); // 11
