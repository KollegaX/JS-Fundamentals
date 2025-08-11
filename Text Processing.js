//// REGEX is a need 


// 1 [Reveal Words]
function solve(wordList, templateString){
    let searchWordsArr = wordList.split(', ');
    let searchWords = {};

    for (let word of searchWordsArr){
        let key = '*'.repeat(word.length);
        searchWords[key] = word;
    }

    let sentence = templateString.split(' ');
    for (let i = 0; i < sentence.length; i++) {
        let currentWord = sentence[i];
        if (searchWords.hasOwnProperty(currentWord)){
            sentence[i] = searchWords[currentWord];
        }
    }

    console.log(sentence.join(' '));

}
solve('great, learning', 'softuni is ***** place for ******** new programming language')



//// [2] #Hashtag 
// // every() method works with arrays like a filter, we give a function and it applies it on every element.
function solve(text){
let textsplit = text.split(' ');

for (let word of textsplit){
    if (word.startsWith('#')){
        let cleanWord = word.slice(1);
        if (cleanWord.length > 0 && cleanWord.split('').every(c => (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z'))) {
        console.log(cleanWord);
    } 
    } 
}
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')



//// [3] Extract File
function extraction(oneWord){
    let fileFullName = oneWord.split('\\').pop();
    let lastDotIndex = fileFullName.lastIndexOf('.')

    let f = fileFullName.substring(0, lastDotIndex);
    let ex = fileFullName.slice(lastDotIndex + 1);

    console.log(`File name : ${f}`);
    console.log(`File extension : ${ex}`);

}
extraction('C:\\Projects\\Data-Structures\\LinkedList.cs')



//// [4] String Substring
function substrings(search,text){
    let words = text.toLowerCase().split(' ');

    if (words.includes(search.toLowerCase())){
        console.log(search);
        
    } else {
        console.log(`${search} not found!`);
        
    }
}
substrings('javascript','Javascript is the best programming language')
substrings('python','JavaScript is the best programming language')



//// [5] Replace Repeating Chars
function replacing(input){
    let string = [];

    for (let i = 0; i < input.length; i++){
        let firstLetter = input[i]
        let secondLetter = input[i + 1];
        let nope = (firstLetter === secondLetter);
        if (!nope){
            string.push(firstLetter);
        } 
    }

    console.log(string.join(''));

}
replacing('aaaaabbbbbcdddeeeedssaa')
replacing('qqqwerqwecccwd')




//// [6] Pascal-Case Splitter
function solve(str){
    let result = [];
    let wordStart = 0;

    for (let i = 1; i < str.length; i++){
        if (str[i] >= 'A' && str[i] <= 'Z'){
            result.push(str.slice(wordStart, i));
            wordStart = i;
        }
    }
    result.push(str.slice(wordStart))
    console.log(result.join(', '));
    
}
solve('HoldTheDoor')
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve('ThisIsSoAnnoyingToDo')


//// [7] Cut and Reverse
function cutReverse(input){
    let massive = [];
    let otherMassive = [];

    for (let i = 0; i < input.length / 2; i++){
       massive.push(input[i])
    }

    for (let i = input.length / 2; i < input.length; i++){
        otherMassive.push(input[i])
    }
    
    console.log(massive.reverse().join(''));
    console.log(otherMassive.reverse().join(''));
}
cutReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')

//// OR [7] Cut and Reverse OR

function cutReverse(str){
    let mid = Math.floor(str.length / 2);
    let firstHalf = str.substring(0, mid);
    let secondHalf = str.substring(mid);

    let reversedFirst = firstHalf.split('').reverse().join('');
    let reversedSecond = secondHalf.split('').reverse().join('');

    console.log(reversedFirst);
    console.log(reversedSecond);
}
cutReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')
