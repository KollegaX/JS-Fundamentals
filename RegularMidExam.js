//FIRST EXERCISE:
function solve(arr){
    let experienceGoingToReceive = arr.shift();
    let battlesCount = arr.shift();
    let currentXP = 0;

    for (let i = 0; i < battlesCount; i++){
        let battles = i + 1;
        let xp = arr[i];

        if (battles % 15 === 0){
            xp *= 1.05;
        } else if (battles % 3 === 0){
            xp *= 1.15;
        } else if (battles % 5 === 0){
            xp *= 0.90;
        }

        currentXP += xp;

        if (currentXP >= experienceGoingToReceive){
            console.log(`Player successfully collected his needed experience for ${battles} battles.`);
            return;
        } 
    }
    let xpNeeded = (experienceGoingToReceive - currentXP).toFixed(2);
    console.log(`Player was not able to collect the needed experience, ${xpNeeded} more needed.`);
}
solve([500,5,50,100,200,100,30])
solve([500,5,50,100,200,100,20])







//SECOND EXERCISE:
function taxCalculator(str){
    let tax = 0;
str = str[0].split('>>')

let FHS = str.map(a => {
    let first = a.split(' ')[0];
    return first;
})

let yearsTaxPaid = str.map(b => {
    let second = Number(b.split(' ')[1]);
    return second;
})

let kilometersTraveled = str.map(c => {
    let third = Number(c.split(' ')[2]);
    return third;
})

 for (let i = 0; i < FHS.length; i++){
    let el = FHS[i];
    let yearsPaying = yearsTaxPaid[i];
    let km = kilometersTraveled[i];
    let taxSum = 0;

    if (el === "family"){
        taxSum = 50 - (yearsPaying * 5) + (Math.floor(km / 3000) * 12)
        tax += taxSum;
        console.log(`A ${el} car will pay ${taxSum.toFixed(2)} euros in taxes.`);

    } else if (el === "heavyDuty"){
        taxSum = 80 - (yearsPaying * 8) + (Math.floor(km / 9000) * 14)
        tax += taxSum;
        console.log(`A ${el} car will pay ${taxSum.toFixed(2)} euros in taxes.`);

    } else if (el === "sports"){
        taxSum = 100 - (yearsPaying * 9) + (Math.floor(km / 2000) * 18)
        tax += taxSum;
        console.log(`A ${el} car will pay ${taxSum.toFixed(2)} euros in taxes.`);
    } else {
        console.log('Invalid car type.');
    }

 }


 console.log(`The National Revenue Agency will collect ${tax.toFixed(2)} euros in taxes.`);
}
taxCalculator([ 'family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410' ]);
taxCalculator([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012']);








//THIRD EXERCISE:
function phoneShop(arr){
    let listOfPhones = arr[0].split(', ');

    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 'End'){
            break;
        }

        let [command, phone] = arr[i].split(' - ');

        switch(command){
            case "Add": 
            if (!listOfPhones.includes(phone)){
                listOfPhones.push(phone);
            } break;

            case "Remove":
                if (listOfPhones.includes(phone)){
                    listOfPhones = listOfPhones.filter(a => a !== phone)
                } break;

            case "Bonus phone":
                let [oldPhone, newPhone] = phone.split(':')
                let index = listOfPhones.indexOf(oldPhone);
                if (index !== -1){
                    listOfPhones.splice(index + 1, 0 , newPhone);
                } break;

            case 'Last':
                if (listOfPhones.includes(phone)){
                    listOfPhones = listOfPhones.filter(b => b !== phone);
                    listOfPhones.push(phone);
                } break;
                
        }
    }

    console.log(listOfPhones.join(', '));


}
phoneShop(["SamsungA50, MotorolaG5, IphoneSE","Add - Iphone10","Remove - IphoneSE","End"]);
phoneShop(["HuaweiP20, XiaomiNote","Remove - Samsung","Bonus phone - XiaomiNote:Iphone5","End"])
phoneShop(["SamsungA50, MotorolaG5, HuaweiP10","Last - SamsungA50","Add - MotorolaG5","End"])
