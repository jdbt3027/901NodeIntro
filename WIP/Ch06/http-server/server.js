const http = require('http');

server.on('request', (request, response) => {
    response.end('Hello Planet!');
});

server.listen(3131, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on 3131`);
})