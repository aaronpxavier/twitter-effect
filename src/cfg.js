/**
 * Application Configuration
 */

// Configuration Object -----------------------------------------------------//

let port;

process.env.PORT ? port = process.env.PORT : port = 3000;

const config = {
    port: port, // server port to listen on
    mode: 'dev',
    db_host: 'mongodb://localhost/UBPILOTS_DB'
}; // end config

// Exports ------------------------------------------------------------------//

export default config;
