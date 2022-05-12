'use strict';

import makeRequest from "./makeRequest";
const utils = require("./utils");

class contract {
    constructor(key) {
        this.key = key;
    }

    send(id) {
        let isKeyValidated = utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,{
            method: 'POST',
            path: '/contracts/'+id+'/send',
        });
    }
}


export default contract;