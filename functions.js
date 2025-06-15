//// FUNCTIONS EXERCISES
//// TRUE OR FALSE
function includes(arr,value){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return true;
        }
    }

    return false;
}

let isIncluded = includes([1,2,3], 4);
console.log(isIncluded);


//// PASS GRADE
function pass(grade){
    return grade >= 3;
}

let result = pass(3)
console.log(result);



//// REAPEAT STRING :
function repeat(value, count){
    let result = '';

    for (let i = 0; i < count; i++){
        result += value;
    }

    return result;
}
let result = repeat('abc', 3);
console.log(result);



//// Nested Functions
function printCertificate(grade, names){
    if (grade < 3.00) {
        console.log('Student does not qualify');
        return;
    }

    printHeader();
    printNames(names);
    printGrade(grade);

    function printHeader(){
        console.log('----= ${@} =-----');
        console.log('-= Certificate =-');
        console.log('-----= --- =-----');   
    }

    function printNames(){
        console.log(`   ${names[0]} ${names[1]}`);
        
    }
function printGrade(grade) {
    if (grade < 3.00) {
        console.log('Fail (2)');
    } else if (grade < 3.50) {
        console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade < 4.50) {
        console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade < 5.50) {
        console.log(` Very good (${grade.toFixed(2)})`);
    } else {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}


}

printCertificate(5.25, ['Peter', 'Carter'])



////....
let solve = (product,quantity) => {
    let price = 0;

    for (let i = 1; i <= quantity; i++){
        switch (product){
            case 'coffee': price = 1.50 * i; break;
            case 'water' : price = 1.00 * i; break;
            case 'coke'  : price = 1.40 * i; break;
            case 'snacks': price = 2.00 * i; break;
            
        }
        
    }

    let result = price;

    console.log(result.toFixed(2));
    
}
solve('water',5)



//// SIGN CHECK
function checkSignOfMultiplication(firstNum, secondNum, thirdNum){
    let totalNegativeNumbers = 0;

    if (firstNum < 0){
        totalNegativeNumbers++;
    }

    if (secondNum < 0 ){
        totalNegativeNumbers++;
    }

    if (thirdNum < 0){
        totalNegativeNumbers++;
    }

    if(totalNegativeNumbers === 1 || totalNegativeNumbers === 3){
        return 'Negative';
    } else {
        return 'Positive';
    }

}

let result = checkSignOfMultiplication(5, 12, -15)
console.log(result);


/////

function solve(a,b,c){
    function findSmallestNumber (x,y){
        if(x <= y){
            return x;
        } else {
            return y;
        }
    }
    let temp_result = findSmallestNumber(a,b);
    let result = findSmallestNumber(temp_result, c);
    console.log(result);
    
}
solve(1,2,3)


/////


function solve(a,b,c){

    function sum(x,y){
        return x + y;
    }

    function substract(x,y){
        return x - y;
    }

    let result = substract(sum(a,b), c);
    // let sumResult = sum(a,b);
    // let finalResult = substract(sumResult, c);
    console.log(result);
    

}
solve(23,6,10)


//// From CharCode Table numbers to numbers/signs to signs
function chars(char1,char2){

    function findBiggerChar(c1,c2){
        let char1 = c1.charCodeAt(0);
        let char2 = c2.charCodeAt(0);

        if (char1 < char2){
            return [char1, char2];
        } else {
            return [char2, char1];
        }    
    }

    let sortedChars = findBiggerChar(char1, char2);
    let start = sortedChars[0];
    let stop = sortedChars[1];
    // let [start, stop] = findBiggerChar(char1, char2);
    let result = [];
    for (let i = start + 1; i < stop; i++){
        result.push(String.fromCharCode(i));

    }
    

    console.log(result.join(' '));
    

}
chars('#',':')



//// Odd and Even Sum
function solve(n){
    function extractEven(num){
        let result = [];
        do {
            let lastNumber = num % 10;
            if (lastNumber % 2 === 0){
                result.push(lastNumber);
            }
            num = parseInt(num / 10);
        }
            while (num > 0){
                return result;
        }
    }


    function extractOdd(num){
        let result = [];

        do {
            let lastNumber = num % 10;
            if (lastNumber % 2 > 0){
                result.push(lastNumber)
            }
         num = parseInt(num / 10)   

        } while (num > 0){
            return result;   
        }

    }


    function sumArray(arr){
        let result = 0;
        for (let i = 0; i < arr.length; i++){
            result += arr[i];
        }
        return result;
    }


    let odd = extractOdd(n);
    let even = extractEven(n);
    let oddSum = sumArray(odd);
    let evenSum = sumArray(even);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    
    
    
}

solve(123456789)



//// Palindrome 

function solve(arr){
    function checkPalindrome(num){
        let str = num.toString();
        let reversed = str.split('').reverse().join('');
        return str === reversed ? true : false;
    }


    for (let el of arr){
        console.log(checkPalindrome(el));
    }

}
solve([123,323,421,121])


//// Password Validator
function solve(pwd){
    function checkLength(str, min, max){
        return str.length >= min && str.length <= max;
    }

    function inRange(num, min, max){
        return num >= min && num <= max;
    }

    function checkLettersDigitsOnly(str){
        for (let i = 0; i < str.length; i++){
            let asciiCode = str[i].charCodeAt(0);
            if (!inRange(asciiCode, 48, 57)// not a digit
            && !inRange(asciiCode, 65, 90) // not a capital digit
            && !inRange(asciiCode, 97, 122) // not a letter
            ) {
                return false;
            } 
        }
        return true;
    }


    function countDigits(str){
        let result = 0;
        for (let i = 0; i < str.length; i++){
            let asciiCode = str[i].charCodeAt(0);
            if (inRange(asciiCode, 48, 57)){
                result++;
            }
        }
        return result;
    }

    let isValid = true;
    if (!checkLength(pwd,6, 10)){
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }
    if (!checkLettersDigitsOnly(pwd)){
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }

    if (countDigits(pwd) < 2){
        console.log('Password must have at least 2 digits');
        isValid = false;
    }

    if (isValid){
        console.log('Password is valid');
        
    }
}
