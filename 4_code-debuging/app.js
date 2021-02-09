const express = require("express");
const authService = require("./src/services/authService");
const AuthCallbackService = require("./src/services/authCallbackService");

const { config } = require("./src/config");

const app = express();

app.get("/", (req, res) => {
  const auth = authService.redirectUri();
  
  res.redirect(auth);
});

app.get("/user/signin/callback", (req, res) => {
  // const { query } = req;
  // const { code } = query;

  // if (!code) {
  //   return res.send({
  //     success : false,
  //     message : 'Code not found'
  //   });
  // }
  
  return AuthCallbackService.callback(req, res);
});

app.listen(config.port);
console.log(`App listening on http://localhost:${config.port}`);
