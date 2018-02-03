var express = require("express");

var port = process.env.PORT || 3000;

app = express();

app.listen(port, function()
{
	console.log("listening to " + port);
});