var express = require("express");
var requestIp = require("request-ip");

var app = express();

app.get("/", function (request, response) {
  var clientIp = requestIp.getClientIp(request);
  console.log(clientIp);
  request.send(clientIp);
});

app.listen(3000, () => console.log(`App listening on port 3000`));
