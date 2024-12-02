const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.sendFile("./index.html",{root:__dirname});
});
app.listen(3000);
module.exports = app