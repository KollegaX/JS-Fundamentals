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
