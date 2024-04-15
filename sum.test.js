const sum = require("./sum");

test("properly adds one and two and get 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("does not properly one and two and get 3", () => {
  expect(sum(1, 2)).not.toBe(4);
});
