console.log(__filename);
console.log(__dirname);
console.log(process.argv[0]);
console.log(process.argv[1]);

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});