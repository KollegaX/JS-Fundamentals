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
