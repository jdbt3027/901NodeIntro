'use strict';

const express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
	res.send('Im in /routes/index.js!')

});

module.exports = router;
