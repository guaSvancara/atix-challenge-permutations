const fixedReplace = function(output, replaceChar) {
  /*
    * Generate fixed number of permutations
    * for loop: algorithmic complexity = O(n)
  */
  const newStrings = [];
  for (let i = 0; i < output.length; i++) {
    newStrings.push(output[i].replace(replaceChar, "0"));
    newStrings.push(output[i].replace(replaceChar, "1"));
  }
  return newStrings;
};

const fixedProcess = function(input) {
  /*
    * Generate permutations for each replaceable character
    * two nested for loops: algorithmic complexity = O(n^2)
  */
  let output = [input];
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === "*") {
      output = fixedReplace(output, input.charAt(i)); // O(n)
    }
  }
  return output;
};

const dynamicReplace = function(fixed, output, replaceChar) {
  /*
    * Generate variable number of permutations
    * two nested for loops: algorithmic complexity = O(n^2)
  */
  const newStrings = [];
  for (let i = 0; i < output.length; i++) {
    for (let j = 0; j < fixed.length; j++) {
      newStrings.push(output[i].replace(replaceChar, fixed[j]));
    }
  }
  return newStrings;
};


const dynamicProcess = function(input, fixed, replaceable) {
  /*
    * Generate permutations for each replaceable character
    * three nested for loops: algorithmic complexity = O(n^3)
  */
  let output = [input];
  for (let i = 0; i < input.length; i++) {
    if (replaceable.includes(input.charAt(i))) {
      output = dynamicReplace(fixed, output, input.charAt(i)); // O(n^2)
    }
  }
  return output;
};

const main = function() {
  const fixedInputs = ["*", "*1", "0*1", "0*1*", "101*011*1"];
  let output;
  for (let i = 0; i < fixedInputs.length; i++) {
    console.log(`Fixed input: ${fixedInputs[i]}`);
    output = fixedProcess(fixedInputs[i]);
    console.log(`Output: [ ${output.join(", ")} ]\n`);
  }

  const dynamicInput1 = "*$";
  const dynamicInput2 = "*1$";
  const dynamicInput3 = "0*1$0*";

  const fixed1 = ["0", "1"];
  const fixed2 = ["0", "1", "2"];
  const fixed3 = ["0", "1", "2", "3"];

  const replaceable = ["*", "$"];


  console.log(`Dynamic input: ${dynamicInput1}`);
  output = dynamicProcess(dynamicInput1, fixed1, replaceable);
  console.log(`Output: [ ${output.join(", ")} ]\n`);

  console.log(`Dynamic input: ${dynamicInput2}`);
  output = dynamicProcess(dynamicInput2, fixed2, replaceable);
  console.log(`Output: [ ${output.join(", ")} ]\n`);

  console.log(`Dynamic input: ${dynamicInput3}`);
  output = dynamicProcess(dynamicInput3, fixed3, replaceable);
  console.log(`Output: [ ${output.join(", ")} ]\n`);
};

main();

module.exports = {fixedReplace, fixedProcess, dynamicReplace, dynamicProcess};
