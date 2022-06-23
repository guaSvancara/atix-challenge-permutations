const {fixedReplace, fixedProcess, dynamicProcess} = require("../app/app.js");

// input *
// permutations [0, 1]
test("basic replacement", () => {
  const output = fixedReplace(["*"], "*");
  expect(output.length).toBe(2);
  expect(output).toContain("0");
  expect(output).toContain("1");
});

// input *1
// permutations [01, 11]
test("one replacement", () => {
  const output = fixedReplace(["*1"], "*");
  expect(output.length).toBe(2);
  expect(output).toContain("01");
  expect(output).toContain("11");
});

// input 101*011*1
// permutations [101001101, 101001111, 101101101, 101101111]
test("two replacements", () => {
  const output = fixedProcess("101*011*1");
  expect(output.length).toBe(4);
  expect(output).toContain("101001101");
  expect(output).toContain("101001111");
  expect(output).toContain("101101101");
  expect(output).toContain("101101111");
});

const fixedChars = ["0", "1"];
const replaceable = ["*", "$"];

// input *$
// permutations [01, 11]
test("process input test", () => {
  const output = dynamicProcess("*$", fixedChars, replaceable);
  expect(output.length).toBe(4);
  expect(output).toContain("00");
  expect(output).toContain("01");
  expect(output).toContain("10");
  expect(output).toContain("11");
});
