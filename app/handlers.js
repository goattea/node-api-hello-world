// route handlers

let handlers = {};

handlers.helloWorld = (callback) => { 
    let helloWorlResponses = {
        'default': 'Hello World!',
        'spanish': 'Hola Mundo!',
        'rap': 'Yo Big Blue!'
    };

    callback(200, helloWorlResponses);
};

handlers.notFound = (callback) => { 
    callback(404);
};

module.exports = handlers;