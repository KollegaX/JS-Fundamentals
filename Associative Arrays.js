//// 1 [PhoneBook]
function solve(data){
    let phoneBook = {};

    for (let entry of data){
    let parsedData = entry.split(' ');
    [fullName, phoneNumber] = parsedData;
    phoneBook[fullName] = phoneNumber;
}

    console.log(phoneBook);
    for (let key in phoneBook){
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}
solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])



//// 2 [Meetings]
function solve(data){
    let meetings = {};

    for (let entry of data){
        let parsedData = entry.split(' ');

        [weekday, fullName] = parsedData;

        if (meetings.hasOwnProperty(weekday)){
            console.log(`Conflict on ${weekday}`);
        } else {
            meetings[weekday] = fullName;
            console.log(`Scheduled for ${weekday}`);   
        }
    }
    for (let weekday in meetings){
        console.log(`${weekday} -> ${meetings[weekday]}`);
    }
}
solve(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])




// 3 [Address Book]
function addressBook(data){
    let addressBook = {};

    for (let entry of data){
        let parsedData = entry.split(':');

        [fullName,address] = parsedData;

        addressBook[fullName] = address;
    }
    let addressBookEntries = Object.entries(addressBook);

    addressBookEntries.sort((first,second) => {
        let firstKey = first[0];
        let secondKey = second[0];
        
        return firstKey.localeCompare(secondKey);
    })

    for (let [fullName, address] of addressBookEntries){
        console.log(`${fullName} -> ${address}`);
        
    }
}
addressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])



//// 4 [Storage]
function solve(input){
    let map = new Map();


    for (let data of input){
        let [item, quantity] = data.split(' ');

        quantity = Number(quantity);
        

        if (map.has(item)){
            let existingQuantity = map.get(item);

            let updatedQuantity = existingQuantity + quantity;

            map.set(item, updatedQuantity);
        } else {
            map.set(item,quantity);
        }
    }

    for (let [key,value] of map.entries()){
        console.log(`${key} -> ${value}`);
        
    }
}
solve(['tomatoes 10','coffee 5','olives 100','coffee 40'])



//// 5 [School grades]
function solve(input){
    // let map = new Map();

    // for (let data of input){
    //     let parts = data.split(' ');

    //     let name = parts[0];
    //     let grades = [];

    //     for (let i = 1; i < parts.length; i++){
    //         let currentGrade = Number(parts[i]);

    //         grades.push(currentGrade);
    //     }
    // }
    /// JUST FOR SPLITTING THE GRADES


    //// OR

    let map = new Map();
    for (let data of input){
        let [name, ...grades] = data.split(' ');
       
        grades = grades.map(Number);

        if (map.has(name)){
            let currentGrades = map.get(name);

            currentGrades = currentGrades.concat(grades);

            map.set(name,currentGrades);
        } else {
            map.set(name,grades)
        }
    }

    let averageGrades = new Map();

    for (let [name, grades] of map){
        let sum = 0;

        for (let grade of grades) {
            sum += grade;
        }

        let average = sum / grades.length;

        averageGrades.set(name,average.toFixed(2));
    }

    let sortedResult = Array.from(averageGrades)
                        .sort((a,b) => a[0].localeCompare(b[0]));

    for (let [name, averageGrade] of sortedResult){
        console.log(`${name} : ${averageGrade}`);
        
    }
}
solve(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])




//// 6 [Word Occurrences]
function solve(input){
    let map = new Map();

    for (let word of input){
        if (map.has(word)){
            let currentCount = map.get(word);
            currentCount++;

            map.set(word,currentCount);
        } else {
            map.set(word, 1);
        }
    }

    let sorted = Array.from(map)
    .sort((firstPair, secondPair) =>{
        let firstValue = firstPair[1];
        let secondValue = secondPair[1];

        return secondValue - firstValue;
    })

    for (let [key,value] of sorted){
        console.log(`${key} -> ${value} times`);
        
    }
}
solve(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])
