const fetch = require("node-fetch");

function fetchUser() {
  const user = fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((data) => data.json())
    .then((user) => user.name)
    .catch((error) => "error");

  return user;
}

fetchUser();

module.exports = fetchUser;
