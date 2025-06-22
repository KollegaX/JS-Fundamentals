//FIRST EXERCISE:
function train(arr){
    let copy = arr.slice();
    let wagons = copy.shift().split(' ').map(Number); // .map(x => Number(x));
    let maxcapacity = Number(copy.shift());

    function checkElementFit(arr,value,maxValue){
        for (el of arr){
            if (el + value <= maxValue){
                return arr.indexOf(el);
            }
        }
        return undefined;
    }
    
    for (let el of copy){
        if (el.includes('Add')){
            [_, passengers] = el.split(' ');
            wagons.push(Number(passengers));
        } else {
            let passengersToFit = Number(el);
            let freeWagons = checkElementFit(wagons,passengersToFit,maxcapacity);
            if (freeWagons !== undefined){
                wagons[freeWagons] += passengersToFit;
            }
        }
    }

    console.log(wagons.join(' '));
    

}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30','10','75']);
train(['0 0 0 10 2 4','10','Add 10','10','10','10','8','6'])



//SECOND EXERCISE:
function distinctArray(arr){
    let result = [];

    for (let el of arr){
        if (result.includes(el)){
            continue;
        } else {
            result.push(el)
        }

    }
    
    console.log(result.join(' '));

}
distinctArray([1,2,3,4])
distinctArray([7, 8, 9, 7, 2, 3,4, 1, 2])
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])



//THIRD EXERCISE:
function houseParty(arr){
    let guestList = [];

    for (let command of arr){
        let name = command.split(' ')[0]; /// let realName = name[0]; 
        if (command.includes('is going!')){
            if (guestList.includes(name)){
                console.log(`${name} is already on the list!`);
            } else {
                guestList.push(name)
            }
        } else if (command.includes('is not going!')) {
            if (guestList.includes(name)){
                let idx = guestList.indexOf(name);
                guestList.splice(idx, 1);
            } else {
                console.log(`${name} is not in the list`);
                
            }

        }

    }
    console.log(guestList.join('\n'));

}
houseParty([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])
houseParty([
    'Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])




//EXERCISE FOUR:
function sorting(arr){
    let sortedArray = arr.sort((a,b) => b - a);
    let middle = Number(sortedArray.length / 2);
    var result = [];
    for (let i = 0; i < middle; i++){
        let biggest = sortedArray.shift();
        let smallest = sortedArray.pop();
        result.push(biggest)
        result.push(smallest);
    }

    console.log(result.join(' '));
    


}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])




//EXERCISE FIVE:
// By Length and Lower Case
function sortAnArrayBy2Criteria(arr){
    arr.sort((a,b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.toLowerCase().localeCompare(b.toLowerCase)
    })
    console.log(arr.join('\n'));

}
sortAnArrayBy2Criteria(['alpha','beta','gamma'])



////EXERCISE SIX:
function bombNumbers(sequence, bombData){
    let [bombNum, power] = bombData;
    while (sequence.includes(bombNum)) {
        let index = sequence.indexOf(bombNum);
        let start = Math.max(0, index - power);
        let end = Math.min(sequence.length - 1, index + power);
        sequence.splice(start, end - start + 1);
    }

    function sumArray(arr){
        let result = 0;
        for (el of arr){
            result += el;
        }
        return result;
    }
    console.log(sumArray(sequence));
    
}   
bombNumbers([1,4,4,2,8,9,1],[9,3])
