// • What is Data Type?;
// • let vs. var;
// • Strings;
// • Numbers;
// • Booleans;
// • Type of Operator;
// • Undefined and Null.


//FIRST EXERCISE:
function echoType(input){

    console.log(typeof input);
    if (typeof input === "object") {
    console.log('Parameter is not suitable for printing');
    }   else {
    console.log(input);
    }
    

}
echoType('Hello, Javascript')
echoType(18)
echoType(null)


//SECOND EXERCISE:
function concatenateNames(fName,lName,delimiter){

    console.log(`${fName} ${delimiter} ${lName}`);

}
concatenateNames('John','Smith','->');
concatenateNames('Jan', 'White', '<->');
concatenateNames('Linda','Terry','=>')



//THIRD EXERCISE:
function rightPlace(wordBefore,letter,rightWord){
    let word = wordBefore.replace('_', letter)

    if (word === rightWord){
        console.log('Matched');
    } else {
        console.log('Not Matched');
        
    }

}
rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')


//FOURTH EXERCISE:
function integerAndFloat(firstNum,secondNum,thirdNum){

    let sum = firstNum + secondNum + thirdNum;

    // if (sum % 1 === 0){
    //     console.log(`${sum} - Integer`);
    // } else {
    //     console.log(`${sum} - Float`);
        
    // }

    sum % 1 === 0 ? console.log(`${sum} - Integer`) : console.log(`${sum} - Float`);
    
    

}
integerAndFloat(9, 100, 1.1)
integerAndFloat(100,200,303)



//FIFTH EXERCISE:
function amazingNumbers(input){
    input = input.toString();
    let sum = 0;

    for (let i = 0; i < input.length; i++){
        sum += Number(input[i]);

    }

    if (sum % 10 === 9){
        console.log(`${input} Amazing ? True`);
    } else {
        console.log(`${input} Amazing ? False`);
        
    }

}
amazingNumbers(1233)


//SIXTH EXERCISE :
function gramophone(band, album, song){

    let songRotation = Math.ceil(((album.length * band.length) * song.length / 2) / 2.5)
    console.log(`The plate was rotated ${songRotation} times.`);

}
gramophone('Black Sabbath', 'Paranoid','War Pigs')
gramophone('Rammstein', 'Sehnsucht','Engel')


//SEVENTH EXERCISE:
function requiredReading(pages,pagesRead,days){

    let a = pages / pagesRead;
    let b = a / days;

    console.log(b);

}
requiredReading(212,20,2)
requiredReading(432,15,4)


//EXERCISE EIGHT:
function centuriesToMinutes(centuries){

 let years = centuries * 100;
 let days = Math.trunc(years * 365.2422);
 let hours = 24 * days;
 let minutes = 60 * hours;

 console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);

}
centuriesToMinutes(1)
centuriesToMinutes(5)


//EXERCISE NINE:
function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let current = i;

        while (current > 0) {
            sum += current % 10;
            current = Math.floor(current / 10);
        }

        let isSpecial = sum === 5 || sum === 7 || sum === 11;
        console.log(`${i} -> ${isSpecial}`);
    }
}

specialNumbers(15)



//EXERCISE TEN:
function triplesOfLatinLetter(n){
n = Number(n)
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            for (let k = 0; k < n; k++){
                let first = String.fromCharCode(97 + i);
                let second = String.fromCharCode(98 + j);
                let third = String.fromCharCode(99 + k);
                console.log(first + second + third);
            }
            
        }
    }

}
triplesOfLatinLetter('3')

