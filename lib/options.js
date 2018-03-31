let props = require('./props.json');

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
        if (props[key].type === typeof (obj[key]) || ((props[key].type === 'int') && (parseInt(obj[key]) === obj[key]))) {
            cleanObj[key] = obj[key];
        }
        else {
            return new Error(`Invalid Options provided, option ${key} should be ${props[key].type}`);
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
    keys = keys.filter(key => props[key]['switch']);
    let switches = keys.map(key => {
        let rv = [];
        if (props[key].type != 'boolean') {
            rv = [props[key]['switch'], obj[key]];
        }
        else if (obj[key]) {
            rv = [props[key]['switch']];
        }
        return rv;
    });
    switches = switches.reduce((acc, cv) => {
        return acc.concat(...cv);
    }, []);
    args = args.concat(switches);
    args = args.concat([obj['pdfPath']]);
    if (obj['txtPath']) {
        args = args.concat([obj['txtPath']]);
    }
    return args;
}

module.exports = { toCleanOptions, optionsToArgs };