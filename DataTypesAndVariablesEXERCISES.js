//FIRST EXERCISE :
function sumDigits(sum){
    sum = sum.toString();
    let sumD = 0;
    for (let i = 0; i < sum.length; i++){
         sumD += Number(sum[i]);
    }

    console.log(sumD);
    
    
}
sumDigits(245678)
sumDigits(97561)
sumDigits(543)


//EXERCISE TWO:
function asciiValues(one,two,three){
    let ascii = one + two + three;
    let element = [];

    for (let i = 0; i < ascii.length; i++){
       let lesgo = ascii.length - 1 - i;
       element.push(ascii[lesgo])
       
    }

    console.log(element.join(''));

    console.log(`${element[0].charCodeAt(0)} ${element[1].charCodeAt(0)} ${element[2].charCodeAt(0)}`);

}
asciiValues('a','b','c')
asciiValues('%','2','o')
asciiValues('1','5','p')


//EXERCISE THREE:
function townInfo(town,population,area){

let isValid = true;
town = String(town);
population = Number(population);
area = Number(area);

if (town.length < 3){
    isValid = false;
    console.log("Town name must be at least 3 characters!");
}

if (population < 0){
    isValid = false;
    console.log(`Population must be a positive number!`);
} else if (area < 0){
    console.log(`Area must be a positive number!`);
    
}

if (isValid){
    console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
}



}
townInfo('Sofia',1286383,492)
townInfo('LA',1481353,512)
townInfo('Plovdiv',-45000, 100)
townInfo('kA', 3600, -50)


//EXERCISE FOUR :
function convertDistance(n){
    let km = n / 1000;
    let miles = km * 0.621371;

    console.log(`${n} meters is equal to ${km} kilometers.`);
    console.log(`${km} kilometers is equal to ${miles.toFixed(2)} miles.`);
    console.log(`-----------------------------------------`);

}
convertDistance(1852)
convertDistance(798)


//EXERCISE FIVE:
function poundsToDollars(n){
let dollars = Number(n) * 1.31;
console.log(dollars.toFixed(3));

}
poundsToDollars(80)
poundsToDollars(39)


//EXERCISE SIX:
function reversedString(str){
    let reversed;
    let element = [];
    for (let i = 0; i < str.length; i++){
       reversed = str.length - 1 - i;
        element.push(str[reversed]);
        
    }
    console.log(element.join(''));
}
reversedString('Information');
reversedString('star');
reversedString('racecar')


//EXERCISE SEVEN:
function lowerOrUpper(cr){
    if (cr === cr.toUpperCase() ){
        console.log('upper-case');
    } else {
        console.log('lower-case'); 
    }
}
lowerOrUpper('L')
lowerOrUpper('f')



//EXERCISE EIGHT:
function calculator(number, operator, anotherNumber){

    if (operator === '+'){
        console.log((number + anotherNumber).toFixed(2));
    } else if (operator === '-'){
        console.log((number - anotherNumber).toFixed(2));
    } else if (operator === '/'){
        console.log((number / anotherNumber).toFixed(2));
    } else if (operator === '*'){
        console.log((number * anotherNumber).toFixed(2));
    }
        


}
calculator(5,'+',10)
calculator(25.5,'-',3)



//EXERCISE NINE :
function gladiatorExpenses(lostFights, helmetPrice,swordPrice,shieldPrice,armorPrice){
    let helmetBroken = 0;
    let swordBroken = 0;
    let shieldBroken = 0;
    let armorBroken = 0;

    for (let game = 1; game < lostFights; game++){
    let helmetThisGame = false;
    let swordThisGame = false;

        if (game % 2 === 0){
            helmetBroken++;
            helmetThisGame = true;
        }

        if (game % 3 === 0){
            swordBroken++;
            swordThisGame = true;
        }

        if (helmetThisGame && swordThisGame){
            shieldBroken++;

        if (shieldBroken % 2 === 0){
            armorBroken++;
        }
    }
    }
let totalCost = helmetBroken * helmetPrice + swordBroken * swordPrice + shieldBroken * shieldPrice + armorBroken * armorPrice;
console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);
}
gladiatorExpenses(7,2,3,4,5)
gladiatorExpenses(23,12.50,21.50,40,200)


//EXERCISE TEN :
function spiceMustFlow(startingYield){
let currentYield = startingYield;
let days = 0;
let consumers = 26;
let sum = 0;

while (currentYield >= 100){
    sum += currentYield - consumers;
    currentYield -= 10;
    days++;
}


    if (sum >= 26) {
         sum -= 26; 
    }

console.log(days);
console.log(sum);
}

spiceMustFlow(450)
spiceMustFlow(111)
