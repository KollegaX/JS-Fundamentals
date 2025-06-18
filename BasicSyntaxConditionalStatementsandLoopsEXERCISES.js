// FIRST EXERCISE:
function solve(age){
    if (age >= 0 && age <= 2){
        console.log("baby");
    } else if (age >= 3 && age <= 13){
        console.log("child");
    } else if (age >= 14 && age <= 19){
        console.log("teenager");
    } else if (age >= 20 && age <= 65){
        console.log("adult");
    } else if (age >= 66){
        console.log("elder");
    } else {
        console.log("out of bounds");
    }


}
solve(-1)


//SECOND EXERCISE:
 function rounding(input){
    console.log(parseFloat(input.toFixed(2)));
    
 }
 rounding(3.1415926535897932384626433832795,2)
 rounding(10.5,3)


//THIRD EXERCISE:
function division(n) {
    if (n % 10 === 0) {
        console.log("The number is divisible by 10");
    } else if (n % 7 === 0) {
        console.log("The number is divisible by 7");
    } else if (n % 6 === 0) {
        console.log("The number is divisible by 6");
    } else if (n % 3 === 0) {
        console.log("The number is divisible by 3");
    } else if (n % 2 === 0) {
        console.log("The number is divisible by 2");
    } else {
        console.log("Not divisible");
    }
}

division(14)


//FOURTH EXERCISE:
function vacation(group,type,day){
    let paying = 0;

    switch (type){

        case "Students": 
            switch(day){
                case "Friday": paying = 8.45; break;
                case "Saturday": paying = 9.80; break;
                case "Sunday": paying = 10.46; break;
            } break;

        case "Business":
                switch(day){
                case "Friday": paying = 10.90; break;
                case "Saturday": paying = 15.60; break;
                case "Sunday": paying = 16; break;
            } break;

        case "Regular":
                switch(day){
                case "Friday": paying = 15; break;
                case "Saturday": paying = 20; break;
                case "Sunday": paying = 22.50; break;
            } break;

    }

    if (type === "Business" && group >= 100) {
        group -= 10;
    }


    let PRICE = group * paying;

    if (type === "Students" && group >= 30){
        PRICE *= 0.85;
    } else if (type === "Business" && group >= 100){
        PRICE *= 0.90;
    } else if (type === "Regular" && (group >= 10 && group <= 20)){
        PRICE *= 0.95;
    }

    console.log(`Total price : ${PRICE}`);
    

}
vacation(30,"Students","Sunday")
vacation(40,"Regular","Saturday")




//FIFTH EXERCISE:
function leapYear(year){
    if ((year % 4 === 0 && !year % 100 === 0) || year % 400 === 0){
        console.log("yes");
    } else {
        console.log("no");
        
    }
}
leapYear(4)


//SIXTH EXERCISE:
function printAndSum(first,second){
    let element = [];
    let sum = 0;

    for (let i = first; i <= second; i++){
        sum += i;
        element.push(i);
        
    }

    console.log(element.join(' '));
    console.log(`Sum: ${sum}`);
    
    


}
printAndSum(5,10)
printAndSum(0,26)
printAndSum(50,60)


//SEVENTH EXERCISE:
function triangleOfNumbers(n) {
    for (let i = 1; i <= n; i++){
        let row = '';
        for (let j = 1; j <= i; j++){
            row += i;
            if (j !== i){
                row += ' ';
            }
        }
        console.log(row);
        
    }
}
triangleOfNumbers(3)


//EIGHT EXERCISE:
function multiplicationTable(n){
    for (let i = 1; i <= 10; i++){
        console.log(`${n} X ${i} = ${n * i}`);
    }
}
multiplicationTable(5)


//NINTH EXERCISE:
function login(str){
    let incorrectTimes = 0;
    let user = str[0];
    let password = user;


    password = password.split('').reverse().join('');

    for (let i = 1; i < str.length; i++){
        if (str[i] === password){
            console.log(`User ${user} logged in.`);
        } else {
            incorrectTimes++;
             if (incorrectTimes < 4){
            console.log(`Incorrect password. Try again.`);
            } else {
            console.log(`User ${user} got blocked.`);
            break;
        }
        }
    }


}
login(['Acer','login','go','let me in','recA'])
login(['sunny','rainy','cloudy','sunny','not sunny'])
login(['momo','omom'])


//TENTH EXERCISE:
function pyramidConstruction(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let height = 0;
    let layer = 0;

    while (base > 2) {
        layer++;
        let totalArea = base * base;
        let innerArea = (base - 2) * (base - 2);
        let outerArea = totalArea - innerArea;

        stone += innerArea * increment;

        if (layer % 5 === 0) {
            lapis += outerArea * increment;
        } else {
            marble += outerArea * increment;
        }

        base -= 2;
    }


    layer++;
    gold += base * base * increment;

    height = Math.floor(layer * increment);

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${height}`);
}
pyramidConstruction(23,0.5)




// ELEVENTH EXERCISE:
function bitcoin(input) {
    const bitcoinPrice = 11949.16;
    const gramOfGold = 67.51;
    let bitcoinBought = 0;
    let moneyGold = 0;
    let dayOfTheBoughtBitcoin = 0;

    for (let i = 0; i < input.length; i++) {
        let gold = input[i];

        if ((i + 1) % 3 === 0) {
            gold *= 0.7;
        }

        moneyGold += gold * gramOfGold;

        while (moneyGold >= bitcoinPrice) {
            moneyGold -= bitcoinPrice;
            bitcoinBought++;
            if (bitcoinBought === 1) {
                dayOfTheBoughtBitcoin = i + 1;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoinBought}`);
    if (bitcoinBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfTheBoughtBitcoin}`);
    }
    console.log(`Left money: ${moneyGold.toFixed(2)} lv.`);
}

bitcoin([3124.15, 504.212, 2511.124]);
