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
