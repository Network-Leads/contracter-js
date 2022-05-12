'use strict';

import makeRequest from "./makeRequest";
const utils = require("./utils");

class sentContracts {
    constructor(key) {
        this.key = key;
    }

    getData(sentId) {
        let isKeyValidated = utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,{
            method: 'GET',
            path: '/contracts/sent/'+sentId,
        });
    }
    delete(sentId) {
        let isKeyValidated = utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,{
            method: 'DELETE',
            path: '/contracts/sent/'+sentId,
        });
    }
}


export default sentContracts;