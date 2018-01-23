var express = require("express");
var app = express();
var path = require("path");
var port = 8000;
var bp = require("body-parser");
var session = require("express-session");

app.use(express.static(path.join(__dirname, "/client/dist")));
app.use(session({secret: "hello anything"}));
app.use(bp.json());


require("./server/config/mongoose");
require("./server/config/routes")(app);
app.listen(port, function(){
    console.log("HELLO LOG REG 8000");
});
