//// \b : should not have any symbol before this thing (before this letter, I don't want another letter)
//// [1] Match Full Name
function solve(input){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g

    let result = input.matchAll(pattern);

    let output = [];

    for (let match of result){
            output.push(match[0])
        
    }

    console.log(output.join(''));
    

}
solve('ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov')





//// [2] Match Phone Number
function phoneN(input){
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;

    let matches = input[0].matchAll(pattern);
    let output = [];

    for (let match of matches){
        output.push(match[0]);
        
    }

    console.log(output.join(', '));
    
}
phoneN(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222,+359-2-222-222, +359-2-222-22222 +359-2-222-2222'])





//// [3] Match Dates
function datesMatch(input){
    let text = input[0];

    let pattern = /\b(?<day>\d{2})([-\.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    let matches = text.matchAll(pattern);

    for (let match of matches){
        console.log(match[0]);

        let day = match.groups['day'];
        let month = match.groups['month'];
        let year = match.groups['year'];

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        
        }
    
}
datesMatch(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973,1/Feb/2016'])




// [4]
function solve(inputLines){
    let pattern = />>([A-Z][A-Za-z\s]*)<<(\d+(\.\d+)?)!(\d+)/;
    let furniture = [];
    let total = 0;

    for (let line of inputLines){
        if (line === 'Purchase') break;

        let match = line.match(pattern)
        if (match){
            let name = match[1]
            let price = parseFloat(match[2]);
            let quantity = parseInt(match[4]);
            furniture.push(name);
            total += price * quantity;
        }

    }

    console.log(`Bought furtniture :`);
    furniture.forEach(item => console.log(item));
    console.log(`Total money spent : ${total.toFixed(2)}`);

}
solve(['>>Sofa<<312.23!3',

'>>TV<<300!5',

'>Invalid<<!5',

'Purchase'])





//// [5]
function solvve(input) {
    let participants = input.shift().split(', ');
    let distances = {};
    let nameRegex = /[A-Za-z]/g;
    let digitRegex = /\d/g;

    for (let line of input) {
        if (line === 'end of race') break;

        let nameMatch = line.match(nameRegex);
        let digitMatch = line.match(digitRegex);

        if (!nameMatch || !digitMatch) continue;

        let name = nameMatch.join('');
        let distance = digitMatch.reduce((a, b) => a + Number(b), 0);

        if (participants.includes(name)) {
            if (!distances[name]) {
                distances[name] = 0;
            }
            distances[name] += distance;
        }
    }

    let sorted = Object.entries(distances)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

    let places = ['1st', '2nd', '3rd'];
    sorted.forEach(([name], index) => {
        console.log(`${places[index]} place: ${name}`);
    });
}

solvve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);





//// [6]
function solve(input){
    let orderPattern = /%([A-Z][a-z]+)%[^$%.]*<(\w+)>[^.*]*\|(\d+)\|[^$]*?(\d+(\.\d+)?)/;
    let totalIncome = 0;

    for (let line of input){
        if (line === 'end of shift') break;

        match = line.match(orderPattern);
        if(match) {
            let customer = match[1];
            let product = match[2];
            let count = parseInt(match[3]);
            let price = parseFloat(match[4]);
            let totalPrice = count * price;
            console.log(`"${customer}: ${product} - ${totalPrice}`);
            totalIncome += totalPrice;
            
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
    
}
solve(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'])
