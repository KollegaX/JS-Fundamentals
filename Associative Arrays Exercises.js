//// 1 [Words Tracker]
function solve(arr){
    let [searchWordsLine, ...textWord] = arr;
    let searchWords = searchWordsLine.split(' ');
    let wordCounts = {};

    for (let word of searchWords){
        wordCounts[word] = 0;
    }

    for (let word of textWord){
        if (wordCounts.hasOwnProperty(word)){
            wordCounts[word]++;
        }
    }

    
    let sorted = Object.entries(wordCounts).sort((a,b) => b[1] - a[1])

    for (let [word,count] of sorted){
        console.log(`${word} - ${count}`);
        
    }

}
solve(['this sentence','In', 'this', 'sentence', 'you', 'have','to', 'count', 'the', 'occurrences', 'of','the', 'words', 'this', 'and', 'sentence','because', 'this', 'is', 'your', 'task'])


// 2 [Odd Occurrences]
function solve(sentence){
    let words = sentence.split(' ');
    let countMap = new Map();

    for (let word of words){
        let lower = word.toLowerCase();
        if (!countMap.has(lower)){
            countMap.set(lower, 0)
        }

        countMap.set(lower, countMap.get(lower) + 1)
       // OR // countMap.set(lower, (countMap.get(lower) || 0) + 1);
        
    }

    let result = [];
    for (let [key,value] of countMap.entries()){
        if (value % 2 === 1){
            result.push(key);
        }
    }

    console.log(result.join(' '));
    
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')



// 3 [Piccolo]
function solve(input){
    let parkingLot = new Set();

    for (let log of input){
        let [direction, numberPlate] = log.split(', ');
        if (direction === 'IN'){
            parkingLot.add(numberPlate);
        } else if (direction === 'OUT'){
            parkingLot.delete(numberPlate);
        }

    }


    if (parkingLot.size === 0) {
        console.log(`Parking Lot is Empty`);
        
    } else {
        let sorted = Array.from(parkingLot).sort((a,b) => a.localeCompare(b))
        for (let car of sorted){
            console.log(car);
            
        }
    }



}
solve(['IN, CA2844AA','IN, CA1234TA','OUT, CA2844AA','IN, CA9999TT','IN, CA2866HI','OUT, CA1234TA','IN, CA2844AA','OUT, CA2866HI','IN, CA9876HH','IN, CA2822UU'])


// 4 [Party Time]
function solve(input){
    let partyIndex = input.indexOf('PARTY');
    let invitedGuests = input.slice(0, partyIndex);
    let arrivedGuests = input.slice(partyIndex + 1);
    
    let VIP = [];
    let REGULAR = [];

    function isVip(str){
        // return str[0] >= '0' && str[0] <= '9' /// OR
           return str.charCodeAt(0) >= 48 && str.charCodeAt(0) <= 57;
    }

    for (let guest of invitedGuests){
        if (isVip(guest)){
            VIP.push(guest);
        } else {
            REGULAR.push(guest);
        }
    }
    
    for (let guest of arrivedGuests){
        if (VIP.includes(guest)){
            VIP.splice(VIP.indexOf(guest), 1)
        }
        if (REGULAR.includes(guest)){
            REGULAR.splice(REGULAR.indexOf(guest), 1)
        }
    }


    let totalGuests = VIP.length + REGULAR.length;

    console.log(totalGuests);

    VIP.forEach(g => console.log(g));
    REGULAR.forEach(g => console.log(g));
    
}

solve(['m8rfQBvl', 'fc1oZCE0','UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ' ])

