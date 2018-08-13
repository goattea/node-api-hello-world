const handlers = require('./handlers');

let routes = {
    'hello': handlers.helloWorld,
    'notFound': handlers.notFound
};

let router = {};

router.getHandler = (route) => {
    let chosenHandler = routes[route] || routes.notFound;
    return chosenHandler;
};

module.exports = router;