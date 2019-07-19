const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));

Promise.try(function() {
	return fs.readFileAsync("./input.txt");
}).then(function(fileContents) {
	console.log(fileContents.toString());
}).catch(function(err) {
	console.error("An error occurred", err);
});