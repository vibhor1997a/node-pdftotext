const convert = require('./lib/convert');
const Options = require('./lib/options');

/**
 * @typedef {Object} Options 
 * @property {string} pdfPath
 * @property {string} txtPath
 * @property {number} first
 * @property {number} last
 * @property {Boolean} layout
 * @property {Boolean} table
 * @property {Boolean} simple
 * @property {Boolean} lineprinter
 * @property {Boolean} raw
 * @property {number} fixed
 * @property {number} linespacing
 * @property {Boolean} clip
 * @property {Boolean} noDiagonalText
 * @property {Boolean} noPageBreak
 * @property {string} ownerPassword
 * @property {string} userPassword
 */

/**
 * @typedef {function(...Error)} errorCallback
 */

/**
 * Converts a pdf file to a txt file
 * @param {Options} obj 
 * @param {errorCallback} callback 
 */
function convertToTxt(obj, callback) {
    obj = Options.toCleanOptions(obj);
    if(obj instanceof Error){
        callback(obj);
        return;
    }
    let args = Options.toArgs(obj);
    convert(args, callback);
}

module.exports = convertToTxt;