// FIRST EXERCISE
function solve(arr){
    let result = [ ];
        let originalSum = 0;
            let finalSum = 0;
                for ( let i = 0; i < arr.length; i++ ){
                let currentNumber = arr[i];
                if (currentNumber % 2 === 0){
                result.push(currentNumber + i);
                 } else {
                result.push(currentNumber - i);
                 }
                originalSum += currentNumber;  
                finalSum += result[i];
                    }

    console.log(result);
    console.log(originalSum);
    console.log(finalSum);
}

solve([5, 15, 23, 56, 35])


// SECOND EXERCISE
function solve(firstArr, secondArr){
    for (let el of firstArr){
        for (let el2 of secondArr){
            if (el === el2){
                console.log(el2);
            }
        }
    }



}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])
solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l'])


// SECOND EXERCISE VOL. 2
function solve(first,second){
    for (let el of first){
        if (second.includes(el)){
        console.log(el);
        }
    }
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])
solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l'])





// THIRD EXERCISE
function solve(first, second){

    let resultArray = [];

    for (let i = 0; i < first.length; i++){
        if ( i % 2 === 0){
            let firstNumber = Number(first[i]);
            let secondNumber = Number(second[i]);
            resultArray.push(firstNumber + secondNumber);
        } else {
            let firstString = first[i];
            let secondString = second[i];
            resultArray.push(firstString + secondString);
        }
    }

    console.log(resultArray.join(' - '));
    


}
solve(['5', '15', '23', '56', '35'],['17', '22', '87', '36', '11'])
solve(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44'])


// FOURTH EXERCISE 
function solve(arr,rotations){
    let len = arr.length;
    let massive = [];
    let r = rotations % len;

    for (let i = r; i < len; i++){
        massive.push(arr[i]);
    }

    for (let i = 0; i < r; i++){
        massive.push(arr[i]);
    }

    console.log(massive.join(' '));
    

}
solve([51,47,32,61,21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);


// FIFTH EXERCISE
function solve(arr){
    let element = [];

    for (let i = 0; i < arr.length; i++){
        let isBigger = true;
        let left = arr[i];

        for (let j = i + 1; j < arr.length; j++){
            let right = arr[j];
            if (right >= left){  
                isBigger = false;
                break;
            }
        }

        if (isBigger)
        element.push(left);

    }

    console.log(element.join(' '));
    


}
solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48])


// SIXTH EXERCISE
function solve(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    let leftSum = 0;

    for (let i = 0; i < arr.length; i++){
        let rightSum = sum - leftSum - arr[i];

        if (leftSum === rightSum){
            console.log(i);
            return;
        }

        leftSum += arr[i];

    }
    
    
    console.log("no");
    


}
solve([1, 2, 3, 3])
solve([1, 2])
solve([1])
solve([1, 2, 3])
solve([10, 5, 5, 99,3, 4, 2, 5, 1, 1, 4])


//SEVENTH EXERCISE
function solve(arr){
let maxLength = 1;
let maxStartIndex = 0;

let currentLength = 1;
let currentIndex = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] === arr[i - 1]){
        currentLength++;
    } else {
        currentLength = 1;
        currentIndex = i;
    }

    if ( currentLength > maxLength){
        maxLength = currentLength;
        maxStartIndex = currentIndex;
    }
}

    let result = [];
    for (let i = maxStartIndex; i < maxStartIndex + maxLength; i++){
        result.push(arr[maxStartIndex])
    }

    console.log(result.join(' '));



}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4,4,4,4])
solve([0,1,1,5,2,2,6,3,3])




//EIGTH EXERCISE
function solve(arr, number){
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            let sum = arr[i] + arr[j];

            if (sum === number){
                console.log(`${arr[i]} ${arr[j]}`);
                
            }
        }
    }

}
solve([14, 20, 60, 13, 7, 19, 8], 27)




////NINTH EXERCISE
function solve(str){
    let rooms = str.split('|');
    let health = 100;
    let coins = 0;

    for (let i = 0; i < rooms.length; i++){

        let [command, valueStr] = rooms[i].split(' ');
        valueStr = Number(valueStr);

        switch (command){
            case 'potion': let healed = Math.min(100 - health, valueStr);
            health += healed;
            console.log(`You healed for ${healed} hp`);
            console.log(`Current health: ${health} hp`);
            break;


            case 'chest': coins += valueStr;
            console.log(`You found ${valueStr} coins.`);
            break;


            default: health -= valueStr;
            if(health > 0){
                console.log(`You slayed ${command}`);
            } else {
                console.log(`You died! Killed by ${command}`);
                console.log(`Best room : ${i + 1}`);
                return;
            }
            break;
        }

    }

console.log("You've made it!");
console.log(`Coins: ${coins}`);
console.log(`Health: ${health}`);


}
solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
// solve("cat 10|potion 30|orc 10|chest10|snake 25|chest 110");
