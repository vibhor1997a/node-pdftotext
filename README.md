# pdftotext-module
This is an npm module wrapping over `pdftotext` utitility software .
For `pdftotool` utitility software click [here](http://www.xpdfreader.com/download.html).


## PREREQUISITES

This Package needs `pdftotext` installed in the host machine and added to the environment variable `PATH` in the host machine. You can download the `pdftotext` software from http://www.xpdfreader.com/download.html.

## INSTALLATION

```sh
npm install pdftotext --save
```

## Usage

```js
const pdftotext = require('pdftotext');
pdftotext(options, err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('converted to txt');
    }
});
```

### 1. Options Object
You need to pass an options object with the following properties as the first argument :-
1. `pdfPath` - Providing this in the options object is compulsory. This should be a path like string. In the absence of this property, the function will pass an error in the callback. 
1. `txtPath` - This is an optional option. This is a path like string. If you want to alter the path of the text file then set this option.
1. `first` - First page to be converted. This should be a int like Number. This is optional.
1. `last` - Last page to be converted. This should be a int like Number. This is optional.
1. `layout` - Maintain (as best as possible) the original physical layout of the text. The default is to ´undo’ physical layout (columns, hyphenation, etc.) and output the text in reading order. If the −fixed option is given, character spacing within each line will be determined by the specified character pitch. This is to be a boolean. This option is optional. Set this to be true to set.
1. `simple` - Similar to −layout, but optimized for simple one-column pages. This mode will do a better job of maintaining horizontal spacing, but it will only work properly with a single column of text. This is to be a boolean. This option is optional. Set this to be true to set.
1. `table` - 	
Table mode is similar to physical layout mode, but optimized for tabular data, with the goal of keeping rows and columns aligned (at the expense of inserting extra whitespace). If the −fixed option is given, character spacing within each line will be determined by the specified character pitch. This is to be a boolean. This option is optional. Set this to be true to set.
1. `lineprinter` - Line printer mode uses a strict fixed-character-pitch and -height layout. That is, the page is broken into a grid, and characters are placed into that grid. If the grid spacing is too small for the actual characters, the result is extra whitespace. If the grid spacing is too large, the result is missing whitespace. The grid spacing can be specified using the `fixed` and `linespacing` options. If one or both are not given on the command line, pdftotext will attempt to compute appropriate value(s). This is to be a boolean. This option is optional. Set this to be true to set.
1. `raw` - Keep the text in content stream order. Depending on how the PDF file was generated, this may or may not be useful. This is to be a boolean. This option is optional. Set this to be true to set.
1. `fixed` - Specify the character pitch (character width), in points, for physical layout, table, or line printer mode. This is ignored in all other modes. This is to be a Number. This option is optional.
1. `linespacing number` - Specify the line spacing, in points, for line printer mode. This is ignored in all other modes. This is to be a Number. This option is optional.

1. `clip` - Text which is hidden because of clipping is removed before doing layout, and then added back in. This can be helpful for tables where clipped (invisible) text would overlap the next column. This is to be a boolean. This option is optional. Set this to be true to set.
1. `nodiag` - Diagonal text, i.e., text that is not close to one of the 0, 90, 180, or 270 degree axes, is discarded. This is useful to skip watermarks drawn on top of body text, etc. This is to be a boolean. This option is optional. Set this to be true to set.
1. `nopgbrk` - Don’t insert page breaks (form feed characters) between pages. This is to be a boolean. This option is optional. Set this to be true to set.
1. `ownerPassword` - Specify the owner password for the PDF file. Providing this will bypass all security restrictions. This is to be a string containing the password. This option is optional.
2. `userPassword` - Specify the user password for the PDF file. This is to be a string containing the password. This option is optional.

### 2. Callback Function
You need to pass a callback function as the second parameter. In case of error error object would be passed into the callback. 