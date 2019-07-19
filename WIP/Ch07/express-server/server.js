const express = require("express");

const config = require("./config.json");

const path = require("path");

let app = express();

app.use(require("./routes/index.js"));

app.listen(config.port, function () {
	console.log(`Listening on http://localhost:${config.port} ...`);
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
