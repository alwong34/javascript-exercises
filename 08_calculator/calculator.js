const add = function(x,y) {
  return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(nums) {
  let result = 0;
	nums.forEach(element => {
    result += element;
  });
  return result;
};

const multiply = function(nums) {
  let result = 1;
  nums.forEach(element => {
    result *= element;
  });
  return result;
};

const power = function(num, exp) {
	return Math.pow(num, exp);
};

const factorial = function(num) {
	let result = 1;
    for (let i = 2; i <= num; i++)
        result *= i;
    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
