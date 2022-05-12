'use strict';

import makeRequest from "./makeRequest";
const utils = require("./utils");

class subCustomers {
    constructor(key) {
        this.key = key;
    }

    getAll() {
        let isKeyValidated = utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,{
            method: 'GET',
            path: '/subCustomers'
        });
    }
    getCustomer(customerId) {
        let isKeyValidated = utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,{
            method: 'GET',
            path: '/subCustomers/'+customerId
        });
    }
    getContracts(customerId) {
        let isKeyValidated = utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,{
            method: 'GET',
            path: '/subCustomers/'+customerId+'/contracts'
        });
    }
    deleteContract(customerId,contractId) {
        let isKeyValidated = utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,{
            method: 'DELETE',
            path: '/subCustomers/'+customerId+'/contract/'+contractId
        });
    }
    create(name) {
        let isKeyValidated = utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,{
            method: 'POST',
            path: '/subCustomers',
            body: {
                name:name
            }
        });
    }
    duplicate(customerId,contractId) {
        let isKeyValidated = utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,{
            method: 'POST',
            path: '/subCustomers/'+customerId+'/duplicate/'+contractId
        });
    }
}


// module.exports = subCustomers;
export default subCustomers;