const functions = {
  sum: (a, b) => a + b,
  substract: (a, b) => a - b,
  cloneArray: (array) => [...array],
  isNull: () => null,
  falsy: {
    zero: () => 0,
    undef: () => undefined,
    returnNull: () => null,
  },
  truthy: {
    one: () => 1,
    string: () => "string",
    obj: () => {
      return {
        name: "test",
      };
    },
  },
};

module.exports = functions;
