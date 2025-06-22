//FIRST EXERCISE : Option 1
function solve(arr){

    let first = arr[0];
    let last = arr[arr.length - 1];
    let firstNumber = Number(first);
    let lastNumber = Number(last);

    console.log(firstNumber + lastNumber);
    
}
solve(["20","30","40"])




//FIRST EXERCISE : Option 2 ;  New Method for Advanced
function solve(arr){
    arr = arr.map(Number)

    let first = arr.shift();
    let last = arr.pop()

    console.log(first + last);
    
}
solve(["20","30","40"])




//SECOND EXERCISE :
function negativeOrPositiveNumbers(arr){
    arr = arr.map(Number);

    let result = [];

    for (let number of arr){
        if (number < 0){
            result.unshift(number);
        } else {
            result.push(number);
        }
    }

    // console.log(result);

    for (let number of result){
        console.log(number);
        
    }
}
negativeOrPositiveNumbers(['7','-2','8','9'])
negativeOrPositiveNumbers(['3','-2','0','-1'])


// (Manipulating Arrays)
// the slice() function creates a new array from part of another
// Gets a rabge of elements from selected start to end (exclusive)
// let myArray = ['one','two','three','four','five']
// let sliced = myArray.slice(2);
// console.log(myArray);
// console.log(sliced);
// console.log(myArray.slice(2,4));

//THIRD EXERCISE:
function firstAndLastKnumbers(input){
    let k = input.shift();

    let firstKNumbers = input.slice(0, k)
    let lastKNumbers = input.splice(input.length - k);

    console.log(firstKNumbers.join(' '));
    console.log(lastKNumbers.join(' '));

}
firstAndLastKnumbers([2,7,8,9])
firstAndLastKnumbers([3,6,7,8,9])




//FOURTH EXERCISE:
function lastKNumbersSequence(n , k){
    let result = [1];

    for (let i = 1; i < n; i++){
        let startIndex = i - k;

        if (startIndex < 0){
            startIndex = 0;
        }

        let previousThreeNumber = result.slice(startIndex, i);
        let sum = 0 ;

        for (let number of previousThreeNumber){
            sum += number;
        }

        result[i] = sum;
         
    }
        console.log(result.join(' '));
}
lastKNumbersSequence(6 , 3);
lastKNumbersSequence(8 , 2);




//Processing Arrays
//Transforming, Filtering and Sorting Elements
//EXERCISE FIVE:
function solve(arr){

    let result = arr
    .filter((num,index) => index % 2 === 1)
    .map(num => num * 2)
    .reverse()
    .join(' ');

    console.log(result);

}
solve([10,15,20,25])
solve([3,0,10,4,7,3])



//Something else
let randomNumbers = [1,101,4,567,123,10,245,900,1001];
console.log(randomNumbers);
randomNumbers.sort((first,second) => second - first);
console.log(randomNumbers);
randomNumbers.sort((first,second) => first - second);
console.log(randomNumbers);

//Something else
let someTexts = ['ivan','Borislav','Ana', 'Ivaylo','anabel','boris'];
let asd = someTexts.sort()
console.log(asd);
let someTextsSorted = someTexts.sort((a,b) => a.localeCompare(b));
console.log(someTexts);




//EXERCISE SIX:
function solve(arr){
    let sorted = arr.sort((a,b) => a - b);

    let firstTwo = sorted.slice(0,2)

    console.log(firstTwo.join(' '));
    
}
solve([30,15,50,5])
solve([3,0,])




//EXERCISE SEVEN:
function listOfProducts(products){
    let result = products
        .sort()
        .map((pr,i) => `${i + 1}.${pr}`)

        for (let product of result){
            console.log(product);
            
        }
        
}

listOfProducts(['Potatoes','Tomatoes','Onions','Apples'])




//EXERCISE EIGHT:
function arrayManipulations(input){
    let numbers = input
    .shift()
    .split(' ')
    .map(Number)

    for (let command of input){
        let commandParts = command.split(' ')

        let commandName = commandParts.shift();

        commandParts = commandParts.map(Number)
        
        if (commandName === 'Add'){
            let value = commandParts.pop()

            numbers.push(value)
        } else if (commandName === 'Remove'){
            let value = commandParts.pop();

            numbers = numbers.filter(num => num !== value);
        } else if (commandName === 'RemoveAt'){
            let index = commandParts.pop();

            numbers.splice(index, 1);
        } else if (commandName === 'Insert'){
            let number = commandParts[0];
            let index = commandParts[1];

            numbers.splice(index, 0, number);
        }

    }
    
    console.log(numbers.join(' '));
}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])


