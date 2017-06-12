import axios from 'axios';
import config from '../config/index';

export const SOME_ACTION_TYPE = 'SOME_ACTION_TYPE';

const requestConfig = {
    headers: {
        // Request headers
    }
};

/* This is an example for an action using axios to fetch data from an endpoint specified in config.json */
export function someAction (/* pass parameters from components here */) {
    const request = axios.get(`${config.BaseURL.endpoint}`, requestConfig);

    return {
        type: SOME_ACTION_TYPE,
        payload: request
    };

}
