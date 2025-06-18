// • Introduction to Basic Syntax;
// • Input/Output;
// • Comparison Operators;
// • Implementing Control-Flow Logic;
// • Logical Operators;
// • Loops;
// • Debugging and Troubleshooting.
    
//FIRST EXERCISE:
function solve(n){
    console.log(n * 2);
}
solve(5)



//SECOND EXERCISE:
function solve(name,age,grade){
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}
solve('John', 15, 5.54678)
solve('Steve', 16, 2.1426)
solve('Marry', 12, 6.00)



//THIRD EXERCISE:
function solve(num){
    num = Number(num);
    switch(num){
        default : console.log("Error, wrong Number/Text"); break;
        case num: if (num >= 5.50 && num <= 6){
            console.log("Excellent");
        } else{
            console.log("High numbers aren't allowed");
        }
    }   
}
solve("asd")



//FOURTH EXERCISE:
function foreignLanguage(country){
switch(country.toLowerCase()){
    default : console.log("Unknown"); break;
    case "usa":
    case "england": console.log("English"); break;
    case "spain":   
    case "argentina":
    case "mexico":  console.log("Spanish"); break;
}
}
foreignLanguage("USA")



//FIFTH EXERCISE:
function monthPrinter(n){
    n = parseInt(n);

    switch(n){
        default : console.log("Error!"); break;
        case 1 : console.log("January"); break;
        case 2 : console.log("February"); break;
        case 3 :console.log("March"); break;
        case 4 :console.log("April"); break;
        case 5 :console.log("May"); break;
        case 6 :console.log("June"); break;
        case 7 :console.log("July"); break;
        case 8 :console.log("August"); break;
        case 9 :console.log("September"); break;
        case 10 :console.log("October"); break;
        case 11 :console.log("November"); break;
        case 12 :console.log("December"); break;
    }
}
monthPrinter(7)


//SIXTH EXERCISE:
function theatrePromotions(day,age){
    let sale = 0;

    if (age <= 18 && age >= 0){
        switch(day){
        default : console.log("Error!"); break;
        case "Weekday": sale = 12; break;
        case "Weekend": sale = 15; break;
        case "Holiday": sale = 5; break;
        }
    } else if (age <= 64 && age > 18){
        switch(day){
        default : console.log("Error!"); break;
        case "Weekday": sale = 18; break;
        case "Weekend": sale = 20; break;
        case "Holiday": sale = 12; break;
        }
    } else if (age <= 122 && age > 64){
        switch(day){
        default : console.log("Error!"); break;
        case "Weekday": sale = 12; break;
        case "Weekend": sale = 15; break;
        case "Holiday": sale = 10; break;
        }
    }

    if (age >= 1){
        console.log(`${sale}$`);
    } else {
        console.log("Error");
        
    }
}
theatrePromotions('Weekday', 42)
theatrePromotions('Holiday', -12)
theatrePromotions('Holiday', 15)


//SEVENTH EXERCISE:
function numbersToFive(){

    for (let i = 1; i <= 5; i++){
        console.log(i);  
    }

}
numbersToFive()

////EIGHT EXERCISE:
function programm(){
    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0){
            console.log(i);
            
        }
    }
}
programm()


//NINTH EXERCISE:
function numbersToN(n){
    let add = 0;
    while (add < n){
        add++;
        console.log(add);
    }

}
numbersToN(5)


//TENTH EXERCISE:
function numberfromMtoN(m,n){
 for (let i = m; i >= n; i--){
    console.log(i);
 }   
}
numberfromMtoN(6,2);
numberfromMtoN(4,1)


//ELEVENTH EXERICSE
function solve(n){
    let sum = 0;
    let oddNumbers = 1;

    for (let i = 0; i < n; i++){
        console.log(oddNumbers);
        sum += oddNumbers;
        oddNumbers += 2;
        
        
    }

    console.log(`Total Sum: ${sum}`);
    
}
solve(3)
