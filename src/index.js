'use strict';

import SubAccounts from "../lib/SubAccounts";
import Templates from "../lib/Templates";
import utils from "../lib/utils";
import makeRequest from "../lib/makeRequest";


class Contracts {

   constructor(key,subKey,options = {}) {
      this.key = key;
      this.subKey = subKey;
      this.options = { ...options };

      this.subAccounts = new SubAccounts(key,subKey);
      this.templates = new Templates(key,subKey);
   }

   getAll() {
      let isKeyValidated = utils.checkKey(this.key);
      if(!isKeyValidated){return false;}

      return makeRequest(this.key,this.subKey,{
         method: 'GET',
         path: '/contracts',
      });
   }
   get(contractKey) {
      let isKeyValidated = utils.checkKey(this.key);
      if(!isKeyValidated){return false;}

      return makeRequest(this.key,this.subKey,{
         method: 'GET',
         path: '/contracts/'+contractKey,
      });
   }
   delete(contractKey) {
      let isKeyValidated = utils.checkKey(this.key);
      if(!isKeyValidated){return false;}

      return makeRequest(this.key,this.subKey,{
         method: 'DELETE',
         path: '/contracts/'+contractKey,
      });
   }
}

/**
 * Exposes `NLContracts`
 */

// module.exports = Contracts;
export default Contracts;