import PubSub from "./PubSub.js";
import { STATE } from "./state.js";

async function fetcher( rqst ) {
    try {
        const response = await fetch( rqst);
        const payload = await response.json();

        if( response.ok) return payload;

        PubSub.Pub({
            event: 'Fetcher::Error',
            detail: {status: response.status, message: payload.message},
        })

        throw new Error( payload.message);

    } catch (error) {
        // Do Something 
        console.error( error);
    }

}


/**
 * 
 * @param {string} endpoint 
 * @param {string} method 
 * @param {Object} data 
 */
export function createRqst( endpoint, method, data) {

    return new Request( `${STATE.apiPath}${endpoint}`, {
        method: method,
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    });
}

export default fetcher;