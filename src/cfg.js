/**
 * Application Configuration
 */

// Configuration Object -----------------------------------------------------//

let port;
let consumerKey;
let consumerSecret;
let accessToken;
let accessTokenSecret;
let fs = require('fs');
var file = fs.readFileSync(__dirname + '/secret.json').toString();
var secret = JSON.parse(file);

process.env.PORT ? port = process.env.PORT : port = 3000;
process.env.CONSUMER_KEY ? consumerKey = process.env.CONSUMER_KEY: consumerKey = secret.consumer_key;
process.env.CONSUMER_SECRET ? consumerSecret = process.env.CONSUMER_SECRET: consumerSecret = secret.consumer_secret;
process.env.ACCESS_TOKEN ? accessToken = process.env.ACCESS_TOKEN: accessToken = secret.access_token;
process.env.ACCESS_TOKEN_SECRET ? accessToken = process.env.ACCESS_TOKEN_SECRET: accessTokenSecret = secret.access_token_secret;
console.log(consumerKey);
const config = {
    port: port, // server port to listen on
    mode: 'dev',
    db_host: 'mongodb://localhost/UBPILOTS_DB',
    access_token: accessToken,
    consumer_secret: consumerSecret,
    consumer_key: consumerKey,
    access_token_secret: accessTokenSecret
}; // end config

// Exports ------------------------------------------------------------------//
console.log(config);
export default config;
