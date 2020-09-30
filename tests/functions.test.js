const func = require("./../functions");

// toBe

test("adds two numbers", () => {
  expect(func.sum(1, 2)).toBe(3);
});

test("substract two numbers", () => {
  expect(func.substract(3, 2)).toBe(1);
});

test("toBe Nan", () => {
  expect(NaN).toBeNaN();
});

// not toBe

test("adds two numbers (not.toBe)", () => {
  expect(func.sum(2, 2)).not.toBe(5);
});

test("subtract two numbers (not.toBe)", () => {
  expect(func.substract(3, 2)).not.toBe(6);
});
test("toBe Nan", () => {
  expect(2).not.toBeNaN();
});

// toBeNull

test("returns null", () => {
  expect(func.isNull()).toBeNull();
});

// toBeFalsy
test("returns falsy", () => {
  expect(func.falsy.zero()).toBeFalsy();
  expect(func.falsy.undef()).toBeFalsy();
  expect(func.falsy.returnNull()).toBeFalsy();
});

// toBeTruthy
test("returns falsy", () => {
  expect(func.truthy.one()).toBeTruthy();
  expect(func.truthy.string()).toBeTruthy();
  expect(func.truthy.obj()).toBeTruthy();
});

// toEqual

test("clones array", () => {
  const array = [1, 5, 7, 89, 9];
  expect(func.cloneArray(array)).toEqual(array);
  expect(func.cloneArray(array)).not.toBe(array);
});

test("object is equal", () => {
  expect(func.truthy.obj()).toEqual({ name: "test" });
});

// less than | greater than

test("should be less/greater than 1000", () => {
  const less = 999;
  const greater = 1001;

  expect(less).toBeLessThan(1000);
  expect(greater).toBeGreaterThan(1000);
});

test("should be less or equal to 1000", () => {
  const less = 1000;
  expect(less).toBeLessThanOrEqual(1000);
});

// toMatch

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test("there is a book in bookshelf", () => {
  expect("bookshelf").toMatch(/book/);
});

test("should match or no regex", () => {
  expect("b").toMatch(/[abc]/);
  expect("d").not.toMatch(/[abc]/);
});

// arrays (toContain, toHaveLength)

test("list contains car", () => {
  const list = ["car", "dog", "cat"];

  expect(list).toContain("car");
  expect(list).not.toContain("house");
});

test("array should have length of 3", () => {
  const array = [1, 2, 3];
  expect(array).toHaveLength(3);
});
