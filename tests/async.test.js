const fetchUser = require("../async");

// promise based

test("user name should be Leanne Graham", () => {
  expect.assertions(1);

  return fetchUser().then((data) => {
    expect(data).toEqual("Leanne Graham");
  });
});

// asnync await

test("user name should be Leanne Graham", async () => {
  expect.assertions(1);

  const data = await fetchUser();
  expect(data).toEqual("Leanne Graham");
});
