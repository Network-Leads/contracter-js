// const utils = require('./utils');

const BASE_PATH = process.env.NODE_ENV == 'development' ? 'http://localhost:3001/api/v1' : 'https://www.contracter.io/api/v1';
const DEFAULT_TIMEOUT = 80000;

function makeRequest(key,opts) {

    // return new Promise((resolve, reject) => {
    return fetch(BASE_PATH+''+opts.path, {
        method: opts.method,
        headers: new Headers({
            'Authorization': 'Bearer '+key,
            'Content-Type': 'application/json'
        }),
        body:JSON.stringify(opts?.body),
    }).then(async(resp)=>{
        // console.log(await resp.json())

        return [resp.status,await resp.json()];
    }).catch((e)=>{
        console.log("[error]");
        console.log(e.status);
        return [500,false];
    });

    // let data = "OK";
    // resolve(data);
  // });
}

// module.exports = makeRequest;
export default makeRequest;
