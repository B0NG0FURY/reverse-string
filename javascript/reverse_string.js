function reverseString(str) {
  const length = str.length;
  const result = [];
  for (let i = length; i > -1; i--) {
    result.push(str[i]);
  }
  return result.join("");
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("Expecting: 'ecin'");
  console.log("Result: ", reverseString("nice"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file

// 1. Grab the length of string and assign it to a variable.
// 2. Create an empty Array call result.
// 3. Iterate over the string starting at string length - 1 and then decreasing the iterator by 1 until iterator equals 0. With each iteration, push the current value into the result Array.
// 4. Once iteration is done, join the result array together.
// And a written explanation of your solution
