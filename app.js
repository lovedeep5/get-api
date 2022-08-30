const express = require("express");
var requestIp = require("request-ip");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  var clientIp = requestIp.getClientIp(req);
  res.json({ ip: clientIp });
});

app.listen(PORT, () => console.log("server runing on " + PORT));
