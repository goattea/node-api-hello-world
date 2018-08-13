const http = require('http');
const requestResponseService = require('./request-response-service');
const config = require('./config');


let server = http.createServer(requestResponseService.default);

server.listen(config.httpPort, function () {
    console.log('Server is listening on port ' + config.httpPort + ' for environment ' + config.envName);
});