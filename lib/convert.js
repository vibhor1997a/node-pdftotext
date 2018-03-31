const {toCleanOptions} = require('./options');

/**
 * @typedef {Object} Options 
 * @property {string} pdfPath pdfp
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
 * @typedef {function(...Error)} convertCallback
 */

/**
 * 
 * @param {...Options} options Options Object, proving the pdfPathProperty is necessary
 * @param {convertCallback} callback Provides error in the callback in case of error otherwise assume success
 */
function convert(options, callback) {
    
}