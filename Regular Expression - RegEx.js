//// regex101.com
//// The /g at the end is a flag, and it stands for: Global search
//// \w - matches any word character(a-z, A-Z, 0-9, _)
//// \W - matches any non-word character (the opposite of \w)
//// \s - matches any white-space character
//// \S - matches any non-white-space character (opposite of \s)
//// \d - matches any decimal digit (0-9)
//// \D - matches any non-decimal character (the opposite of \d)

//// * - matches the previous element zero or more times
//// + - matches the previous element one or more times
//// ? - matches the previous element zero or one time
//// {3 or 4 or 5 or less/more} - matches the previous element exactly 3 times

//// (subexpression) - captures the matched subexpression as numbered group
//// (?:subexpression) - defines a non-capturing group
//// (?<name>subexpression) - defines a named capturing group

//// JS regular expression in one of ways : - Regular Expression Literal and The constructor function RegExp
//// for example :
let regLiteral = /[A-Za-z]+/g //// or
let regExp = new RegExp('[A-Za-z]+','g')


//// Validating String by Pattern : The method .test(string) - Determines whether there is a match
let text = 'Today is 2015-05-11';
let regexp = /\d{4}-\d{2}-\d{2}/g

let containsValidDate = regexp.test(text);
console.log(containsValidDate);


//// Checking for Matches : The method match(regexp) - Returns an array of all matches(strings)
let text1 = 'Peter: 123 Mark: 456';
let regexp1 = /([A-Z][a-z]+): (\d+)/g;
let matches = text1.match(regexp1);

console.log(matches.length);
console.log(matches[0]);
console.log(matches[1]);


//// Using the Exec() Method : The method exec(string,text) - Works with a pointer and returns the groups
let text2 = 'Peter: 123 Mark: 456';
let regex = /([A-Z][a-z]+): (\d+)/g;
let firstMatch = regex.exec(text2);
let secondMatch = regex.exec(text2);

console.log(`--------------`);
console.log(firstMatch[0]);
console.log(firstMatch[1]);
console.log(firstMatch[2]);
console.log(firstMatch);



////New example of regex :
let regexpr = /[0-9]+/g;
let text3 = 'JS Fundamentals 2025, C# Advanced 2026';
let result = text3.replace(regexpr, '2000');
console.log(result);



////Method MatchAll - The method matchAll(regexp) - Returns an iterator of all results matching a string against a regular expression, including capturing groups
const regeex = /t(e)(st(\d?))/g;
const str = 'test1test2';
const array = [...str.matchAll(regeex)];
console.log(array[0]);



//// Splitting with RegExp : The method split(regexp) - splits the text by the pattern, - returns an array of strings
let text123 = '1        2   3           4';
let regexppp = /\s+/g;
let result1 = text123.split(regexppp);
console.log(result1);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////// \b : should not have any symbol before this thing (before this letter, I don't want another letter)

//// [1] Match Full Name
function solve(input){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g

    let result = input.matchAll(pattern);

    let output = [];

    for (let match of result){
            output.push(match[0])
        
    }

    console.log(output.join(''));
    

}
solve('ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov')


//// [2] Match Phone Number
function phoneN(input){
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;

    let matches = input[0].matchAll(pattern);
    let output = [];

    for (let match of matches){
        output.push(match[0]);
        
    }

    console.log(output.join(', '));
    
}
phoneN(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222,+359-2-222-222, +359-2-222-22222 +359-2-222-2222'])



//// [3] Match Dates
function datesMatch(input){
    let text = input[0];

    let pattern = /\b(?<day>\d{2})([-\.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    let matches = text.matchAll(pattern);

    for (let match of matches){
        console.log(match[0]);

        let day = match.groups['day'];
        let month = match.groups['month'];
        let year = match.groups['year'];

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        
        }
    
}
datesMatch(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973,1/Feb/2016'])

