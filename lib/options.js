let o = require('./props.json');

//simplify structure for the following func
let props = Object.keys(o).reduce((acc, cv, ci) => {
    let arr = o[cv].map(({ prop }) => prop);
    acc[cv] = arr;
    return acc;
}, {});

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
 * Converts Options object into a clean object without discrepancy, if discrepancy found returns an Error
 * @param {...Options} obj
 * @returns {...Options}
 */
function toCleanOptions(obj) {
    let keys = Object.keys(obj);
    let cleanObj = {};
    let pdfPath = obj['pdfPath'];
    if (!((pdfPath) && typeof (pdfPath) === 'string')) {
        return new Error(`No pdfPath option provided!`);
    }
    for (let key of keys) {
        if (props['boolean'].indexOf(key) > -1) {
            if (typeof (obj[key]) !== 'boolean') {
                return new Error(`Invalid Options provided, option ${key} should be a boolean`);
            }
            else {
                cleanObj[key] = obj[key];
            }
        }
        else if (props['number'].indexOf(key) > -1) {
            if (typeof (obj[key]) !== 'number') {
                return new Error(`Invalid Options provided, option ${key} should be a number`);
            }
            else {
                cleanObj[key] = obj[key];
            }
        }
        else if (props['int'].indexOf(key) > -1) {
            if (typeof (obj[key]) !== 'number') {
                return new Error(`Invalid Options provided, option ${key} should be a number`);
            }
            else {
                cleanObj[key] = parseInt(obj[key]);
            }
        }
        else {
            if (typeof (obj[key]) !== 'string') {
                return new Error(`Invalid Options provided, option ${key} should be a string`);
            }
            else {
                cleanObj[key] = obj[key];
            }
        }
    }
    return cleanObj;
}

/**
 * Converts the Options into arguments array to be used in spawning child process
 * @param {Options} obj
 * @returns {String[]} Arguments array
 */
function optionsToArgs(obj) {
    let args = [];
    let keys = Object.keys(obj);
    keys = keys.filter(key => !(key == 'pdfPath' || key == 'txtPath'));
    let switches = keys.map
}

module.exports = { toCleanOptions };