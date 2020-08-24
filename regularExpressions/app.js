let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;             // Must start with h
re = /d$/i;             // Must ends with d
re = /^hello$/i         // Must begin and end with
re = /h.llo/i           // Matches any ONE character
re = /h*llo/i;          // Matches any character 0 or more times
re = /gre?a?y/i;        // Optional character
re = /gre?a?y\?/i;         // Escape characters

// String to match
const str = "Gray?";

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT matches ${re.source}`)
    }
}


reTest(re, str);