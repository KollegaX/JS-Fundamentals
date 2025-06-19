//EXERCISE ONE:
function sumFirstAndLastArrayElements(input){
let first = input[0];
let last = input[input.length - 1];
console.log(first + last);
}
sumFirstAndLastArrayElements([20,30,40])


//EXERCISE TWO:
function dayOfWeek(input) {
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


  if (input >= 1 && input <= 7) {
    console.log(days[input - 1]);
  } else {
    console.log('Invalid Input');
  }

}

dayOfWeek(3);  
dayOfWeek(0); 


//EXERCISE THREE:
function reverseAnArrayOfNumbers(n, array){

    let element = [];

    for (let i = 0 ; i < n ; i++){
        element.push(array[i]); 

    }

for (let i = 0 ; i < n; i++){
    element[i] = array[n - 1 - i];
}
console.log(element);
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])
reverseAnArrayOfNumbers(4,[-1, 20, 99, 5])


//EXERCISE FOUR:
function reverseInPlace(array){
    for (let i = 0; i < array.length / 2; i++){
        let asd = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = asd;
    }

console.log(array.join(' '));


}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig','klm', 'nop'])
reverseInPlace(['33', '123', '0', 'dd'])


//EXERCISE FIVE:
function sumEvenNumbers(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i]);
        if (arr[i] % 2 === 0){
            sum += arr[i];
        }
        
    }
    console.log(sum);
}
sumEvenNumbers(['1','2','3','4','5','6'])
sumEvenNumbers(['3','5','7','9'])
sumEvenNumbers(['2','4','6','8','10'])



//EXERCISE SIX:
function evenAndOddSubtraction(arr){
    let even = 0;
    let odd = 0;

    for (let num of arr){
        num = Number(num);

        if (num % 2 === 0){
            even += num;
        } else if (num % 2 === 1){
            odd += num;
        }
    }

    let sum = even - odd;
    console.log(sum);
    
}
evenAndOddSubtraction([1,2,3,4,5,6])
evenAndOddSubtraction([3,5,7,9])
evenAndOddSubtraction([2,4,6,8,10])


//EXERCISE SEVEN:
let notIdentical = 0;
let sum = 0 ;
function equalArrays(arr1, arr2){

    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] === arr2[i]){
            sum += Number(arr1[i]);
            continue;
        } else {
            notIdentical = i;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }

    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}
equalArrays(['10','20','30'],['10','20','30'])
equalArrays(['1','2','3','4','5'],['1','2','4','4','5'])
equalArrays(['1'], ['10'])


//EXERCISE EIGHT:
function condenseArrayToNumber(arr){
    let result = [];
    let sum = 0;

    while (true){
        if (arr.length === 1){
            console.log(arr[0]);    
            return;
        }


         for (let i = 0; i < arr.length - 1; i++) {
            let sum = arr[i] + arr[i + 1];
            result.push(sum);
        }

        if (result.length === 1){
            break;
        }

        arr = result;
        result = [];

    }

    console.log(result[0]);
    
    
}
condenseArrayToNumber([2,10,3])
condenseArrayToNumber([5,0,4,1,2])
condenseArrayToNumber([1])

