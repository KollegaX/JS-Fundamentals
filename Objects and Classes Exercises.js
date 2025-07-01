/// OBJECTS:
function solve(){
    let obj = {
        name: 'Karlson',
        location: 'The roof',
        age: 22
    }

    let keys = Object.keys(obj);
    console.log(keys);
    debugger
    
}
solve()

//EXERCISE ONE:
function employees(input){
    for (let i = 0; i < input.length; i++){
        let number = input[i].length;
        let name = input[i];
        console.log(`Name: ${name} -- Personal Number: ${number}`);
    }
}    /// WITHOUT OBJECTS 

function employees(arr){
    let result = [];

    for (let employee of arr){
        let employeeObj = {
            name : employee,
            personalNumber : employee.length
        }
        result.push(employeeObj)
    }
    result.forEach((em) => {
        console.log(`Name: ${em.name} -- Personal Number: ${em.personalNumber}`);  
    })
}    ///// WITH OBJECTS
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])


/// SOME EXERCISE
function solve(){
    class Item{

        static order = 1;

        constructor(name, price, discount){
            this.name = name;
            this.price = price;
            this.discount = discount;
            
            this.orderNumber = Item.order;
            Item.order++;

        }

    }
    let myItem = new Item('Tablet', 300, 10);
    let myItem2 = new Item('Socks', 30, 20);


    console.log(myItem);
    console.log(myItem2);
    console.log(Item.order);
    
    
}
solve()


// EXERCISE TWO:
function solve(arr){
    let result = [];
    for (let record of arr){
        [cityName, lat, lon] = record.split(' | ');
        let city = {
            'town' : cityName,
            'latitude' : Number(lat).toFixed(2),
            'longitude' : Number(lon).toFixed(2)
        }
        result.push(city);
    }
    
    for (let town of result){
        console.log(town);
    }

}
solve(
    ['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])



//EXERCISE THREE:
function storeProvision(currentStock, deliveryStock){
let store = {};
for (let i = 0; i < currentStock.length; i += 2){
    let product = currentStock[i];
    let quantity = Number(currentStock[i + 1]);

    store[product] = quantity;
}

for (let i = 0; i < deliveryStock.length; i += 2){
    let product = deliveryStock[i];
    let quantity = Number(deliveryStock[i + 1]);
    if (store.hasOwnProperty(product)){
        store[product] += quantity;
    } else {
        store[product] = quantity;
    }

}

for (let product in store){
    console.log(`${product} -> ${store[product]}`);
    
}
}
storeProvision
(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7','Tomatoes', '70', 'Bananas', '30'])






//EXERCISE FOUR:
function movies(input){
    let movies = [];
    for (let line of input){
        if (line.startsWith('addMovie')){
            let name = line.substring(9);
            movies.push({'name' : name});
        }   else if (line.includes('directedBy')){
            let [name, director] = line.split(' directedBy ');
            let movie = movies.find(m => m.name === name);
                if (movie){
                    movie.director = director;
                } 
            } else if (line.includes('onDate')) {
                let [name,date] = line.split(' onDate ');
                let movie = movies.find(m => m.name === name);
                if (movie) {
                    movie.date = date;
                }
            } 
    }
        for (let movie of movies){
            if (movie.director && movie.date){
                console.log(JSON.stringify(movie));
                
            }
        }
}
movies([

'addMovie Fast and Furious',

'addMovie Godfather',

'Inception directedBy Christopher Nolan',

'Godfather directedBy Francis Ford Coppola',

'Godfather onDate 29.07.2018',

'Fast and Furious onDate 30.07.2018',

'Batman onDate 01.08.2018',

'Fast and Furious directedBy Rob Cohen'
])


//EXERCISE FIVE:
function solve(input){
    let heroes = [];

    for (let line of input){
        let [name, levelStr, itemsStr] = line.split(' / ');
        let level = Number(levelStr);
        let items = itemsStr ? itemsStr.split(', ').filter(i => i) : [];
        heroes.push({name, level, items});
    }
    heroes.sort((a,b) => a.level - b.level);
    for (let hero of heroes){
        console.log(`Hero: ${hero.name}`);
        console.log(`Level => ${hero.level}`);
        console.log(`Items => ${hero.items.join(', ')}`);
        
        
    }
}
solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])




//EXERCISE SIX:
function solve(jsonArray){
    let dictionary = {};

    for (let jsonStr of jsonArray){
        let entry = JSON.parse(jsonStr);
        let term = Object.keys(entry)[0];
        let definition = entry[term];
        dictionary[term] = definition;
    }

    let sortedTerms = Object.keys(dictionary).sort();

    for (let term of sortedTerms){
        console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
        
    }


}
solve([

'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}','{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'])



//EXERCISE SEVEN :
function classVehicle(input){
    class Vehicle {
        constructor(type,model,parts,fuel,drive){
            fuel = Number(fuel);
            this.type = type;
            this.model = model;
            this.parts = parts;
            this.parts.quality = parts.engine * parts.power;
            this.fuel = fuel;
        }

        drive(fuel) {
            this.fuel -= fuel;
        }

    }

let parts = {engine: 9, power: 500};
let vehicle = new Vehicle('l', 'k', parts, 840);
vehicle.drive(20);
console.log(vehicle.fuel);

}
classVehicle();
