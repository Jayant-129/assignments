/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(){
    this.result = 0;
  }
  add(a){
    this.result += a;
    return this.result;
  }
  subtract(b){
    this.result -= b;
    return this.result;
  }
  multiply(c){
    this.result *= c;
    return this.result;
  }
  divide(d){
    if (d === 0) {
      throw new Error("Cannot divide by zero");
    }
    try{
      this.result /= d;
      return this.result;
    }
    catch(err){
      console.log(err);
    }
  }
  clear(){
    this.result = 0;
    return this.result;
  }
  getResult(){
    return this.result;
  }
  calculate(a){
    const re = /[a-z]/i;
    if(re.test(a)){
      throw new Error("Input has alphabets");
    }
      if (a.includes(' / 0')) {
        throw new Error("Cannot divide by zero");
      }
      if (!this.isValid(a)) {
        throw new Error("Invalid parentheses");
      }
      this.result = eval(a);
      return this.getResult();

  }

  isValid(s){
    let stack = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        stack.push(s[i]);
      } else if (s[i] === ')') {
        if (stack.length === 0) {
          return false;
        }
        stack.pop();
      }
    }
    return stack.length === 0;
  }
}

module.exports = Calculator;

