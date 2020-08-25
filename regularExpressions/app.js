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
re = /gre?a?y\?/i;      // Escape characters



// Brackets [] - Character Sets
re = /gr[ae]y/i;        // Must be an a or an e   
re = /[GF]ray/i;        // Must be an G or F
re = /[^GF]ray/i;       // Match anything except a G or F
re = /[A-Z]ray/;        // Match any uppercase letters  
re = /[a-z]ray/;        // Match any lowercase letters
re = /[A-Za-z]ray/;     // Match any letter
re = /[0-9]ray/;        // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;        // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;      // Must occur exactly {m} amount of times
re = /Hel{2,}o/i;       // Must occur at least {m} times


// Parentheses () - Grouping
re = /^([0-9]x){3}$/;   


// Shorthand Character Classes
re = /\w/;              // Word character - alphanumeric or _
re = /\w+/;             // +  = one or more
re = /\W/;              // Non-Word character
re = /\d/;              // Match a digit
re = /\d+/;             // Match any digits 0 or more times
re = /\D/;              // Match any Non-digit 
re = /\s/;              // Match whitespace character
re = /\S/;              // match non-whitespace characters
re = /Hell\b/i;         // Word boundary


// Assertions
re = /x(?=y)/;          // Match x only if followed by y
re = /x(?!y)/;          // Match x only if NOT followed by y

// String to match
const str = "dsadsdxyrerew";

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