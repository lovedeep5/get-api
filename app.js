const express = require("express");
var requestIp = require("request-ip");

const app = express();

app.get("/", function (req, res) {
  var clientIp = requestIp.getClientIp(req);
  res.send(clientIp);
});

app.listen(3000, () => console.log("server runing on 3000"));
