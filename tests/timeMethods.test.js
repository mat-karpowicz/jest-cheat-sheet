const timeFunc = require("./../timeFunctions");

test("just a true mock test", () => {
  expect(true).toBeTruthy();
});

test("just a false mock test", () => {
  expect(false).not.toBeTruthy();
});

// beforeEach
beforeEach(() => timeFunc.openDatabase());

// afterEach
afterEach(() => timeFunc.closeDatabase());

// beforeAll
beforeAll(() => timeFunc.openDatabase());

// afterAll
afterAll(() => timeFunc.closeDatabase());

// describe
describe("checking things", () => {
  beforeAll(() => timeFunc.checkBeforeDescribe());
  test("just a true mock test", () => {
    expect(true).toBeTruthy();
  });

  test("just a false mock test", () => {
    expect(false).not.toBeTruthy();
  });

  afterAll(() => timeFunc.checkAfterDescribe());
});
