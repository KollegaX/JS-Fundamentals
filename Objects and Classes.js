function solve(city){
    let keys = Object.keys(city);

    for (let key of keys){
        let value = city[key];

        console.log(`${key} -> ${value}`);
    }

    /////// OR

    for (let [key, value] of Object.entries(city)){
        console.log(`${key} -> ${value}`);
        
    }
}
solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});


let firstNumber = 1000;
let secondNumber = firstNumber;

secondNumber = 5000;

console.log(firstNumber);


let firstArray = [1,2,3];
let secondArray = firstArray;
let copy = firstArray.slice()

copy[1] = 3100;

secondArray[0] = 100;

console.log(copy);

console.log(firstArray);

//////////////////////////CLASSES
class Employee {
    firstName;
    lastName;
    age;
    hireDate; /// or without it, because (this.) is creating firstname for the class

    constructor(firstName,lastName,age,hireDate){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.hireDate = hireDate
    }

    speak (){
        console.log(`Hello from ${this.firstName}`);
        
    }
}

let myEmployee = new Employee('Ivan','Ivanov',33,'05.2024');
let mySecondEmployee = new Employee('Maria','Georgieva','27','04.2023')

console.log(myEmployee);

let myEmployeeArr = [myEmployee,mySecondEmployee];

for (let employee of myEmployeeArr){
    employee.speak() // if it's console.log it's getting undefined
    
}


/////////// 5. Cats
function solve(catDataArr){

    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        meow(){
            return `${this.name}, age ${this.age} says Meow`
        }
    }


    for (let catData of catDataArr){
        let parsedData = catData.split(' ');

        let catName = parsedData[0];
        let catAge = parsedData[1];

        let cat = new Cat(catName, catAge);

        console.log(cat.meow());
        
    }
}
solve(['Mellow 2', 'Tom 5'])


///////////////6. Songs
function solve(data){
    class Song {
        constructor(typeList,name,time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = data[0];

    let allSongs = [];

    for (let i = 1; i <= numberOfSongs; i++){
        let parsedData = data[i].split('_');

        let typeList = parsedData[0];
        let name = parsedData[1];
        let time = parsedData[2];

        let song = new Song(typeList,name,time);

        allSongs.push(song);
    }

    let searchTerm = data.pop()

    if (searchTerm !== 'all'){
        allSongs = allSongs.filter(s => s.typeList === searchTerm);
    }
    
    let songNames = allSongs.map(s => s.name);

    for (let songName of songNames){
        console.log(songName);
        
    }

}
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
])
