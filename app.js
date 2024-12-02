const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.sendFile("./index.html",{root:__dirname});
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
module.exports = app