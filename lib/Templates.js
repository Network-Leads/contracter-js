'use strict';

import makeRequest from "./makeRequest";
const utils = require("./utils");

class Templates {
    constructor(key,subKey) {
        this.key = key;
        this.subKey = subKey;
    }

    getAll() {
        let isKeyValidated = utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,this.subKey,{
            method: 'GET',
            path: '/templates',
        });
    }
    get(id) {
        let isKeyValidated = utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,this.subKey,{
            method: 'GET',
            path: '/templates/'+id,
        });
    }
    delete(id) {
        let isKeyValidated = utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,this.subKey,{
            method: 'DELETE',
            path: '/templates/'+id,
        });
    }
    send(id) {
        let isKeyValidated = utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,this.subKey,{
            method: 'POST',
            path: '/templates/'+id+'/send',
        });
    }
    duplicate(id) {
        let isKeyValidated = utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,this.subKey,{
            method: 'POST',
            path: '/templates/'+id+'/duplicate',
        });
    }
}


export default Templates;