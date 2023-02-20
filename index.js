// run `node index.js` in the terminal

var request = require("request");
var options = {
  method: "POST",
  url: "https://cuenta.megatime.cl/api/auth/key",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "ramon.perez@megatime.cl",
    password: "megatime2020",
  }),
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

