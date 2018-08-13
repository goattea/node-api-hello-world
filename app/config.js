// create and export environment variables

let environments = {};

environments.development = {
    httpPort: 3000,
    envName: 'development'
};

let currentEnvironment = typeof(process.env.NODE_ENV) === 'string' ?
    process.env.NODE_ENV.toLowerCase() :
    '';

let environmentToExport = typeof (environments[currentEnvironment]) === 'object' ?
    environments[currentEnvironment] :
    environments.development;

module.exports = environmentToExport;