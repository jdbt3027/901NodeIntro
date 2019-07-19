const fs = require("fs");

fs.readFile("./input.txt", function(err, fileContents) {

    if (err != null) {
		console.error("An error occurred", err);
	} else {
		console.log(fileContents.toString());
	}
})