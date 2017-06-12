import _ from 'lodash';
import Ajv from 'ajv';
import schema from './schema.json';

const config = {};
_.assign(config, process.env);

let configFile;
switch (config.NODE_ENV) {
    case 'test':
    case 'ci':
        configFile = require('./config.' + config.NODE_ENV + '.json');
        break;
    default:
        // Webpack injected external module
        configFile = require('./config.json');
        break;
}
_.assign(config, configFile);

const ajv = new Ajv();
if (!ajv.validate(schema, config)) {
    throw 'Invalid configuration:\n' + JSON.stringify(ajv.errors, null, 4);
}

// Assign runtime configs
let browserLocale = navigator ?
    (navigator.language || navigator.userLanguage).split('-')[ 0 ] : config.Settings.defaultLocale;
config.Settings.currentLocale = browserLocale;

export default config;
