const { spawn } = require('child_process');
/**
 * @typedef {function(...Error)} errorCallback
 */

/**
 * Converts pdf file and provide error if occurs into the callback
 * @param {String[]} args 
 * @param {errorCallback} callback Provides error in the callback in case of error otherwise assume success
 */
function convert(args, callback) {
    let p = spawn('pdftotext', args);
    p.on('error', err => {
        callback(err);
        return;
    });
    p.on('close', (code, signal) => {
        if (code == 0) {
            callback(undefined);
            return;
        }
        else {
            callback(new Error('Something Went Wrong :('));
            return;
        }
    })
}

module.exports = convert;