const url = require('url');
const router = require('./router');

let requestResponseService = {
    'default': (request, response) => {
        const parseQueryString = false;
        const parsedUrl = url.parse(request.url, parseQueryString);
        const path = parsedUrl.pathname.replace(/^\/+|\/+$/g, '');

        request.on('data', () => {}); // why is this needed if I don't care about payload?

        request.on('end', () => {
            let handler = router.getHandler(path);
            handler((statusCode, payload) => {
                const defaultStatusCode = 200;
                const defaultPayload = {};
    
                statusCode = typeof (statusCode) === 'number' ? statusCode : defaultStatusCode;
                payload = typeof (payload) === 'object' ? payload : defaultPayload;
                const payloadString = JSON.stringify(payload);
    
                response.setHeader('content-type', 'application/json');
                response.writeHead(statusCode);
                response.end(payloadString);
    
                console.log('Request received:', path, 'Response Sent:', statusCode, payloadString);
            });
        });
    }
};

module.exports = requestResponseService;