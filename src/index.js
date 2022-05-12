'use strict';

import SubCustomers from "../lib/subCustomers";
import Contract from "../lib/contract";
import SentContracts from "../lib/sentContracts";
import utils from "../lib/utils";
import makeRequest from "../lib/makeRequest";


class Contracts {

   constructor(key,options = {}) {
      this.key = key;
      this.options = { ...options };

      this.subCustomers = new SubCustomers(key);
      this.contract = new Contract(key);
      this.sent = new SentContracts(key);
   }

   get(id) {
      let isKeyValidated = utils.checkKey(this.key);
      if(!isKeyValidated){return false;}

      return makeRequest(this.key,{
         method: 'GET',
         path: '/contracts/'+id,
      });
   }
   getAll() {
      let isKeyValidated = utils.checkKey(this.key);
      if(!isKeyValidated){return false;}

      return makeRequest(this.key,{
         method: 'GET',
         path: '/contracts',
      });
   }
}

/**
 * Exposes `NLContracts`
 */

// module.exports = Contracts;
export default Contracts;