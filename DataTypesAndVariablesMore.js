//EXERCISE ONE:
function digitsAndWords(n){

    switch(n){
        case "zero": console.log(0); break;
        case 'one' : console.log(1); break;
        case 'two' : console.log(2); break;
        case 'three' : console.log(3); break;
        case 'four' : console.log(4); break;
        case 'five' : console.log(5); break;
        case 'six' : console.log(6); break;
        case 'seven' : console.log(7); break;
        case 'eight' : console.log(8); break;
        case 'nine' : console.log(9); break;
        case 'ten' : console.log(10); break;

    }
}
digitsAndWords('nine')


//EXERCISE TWO:
function primeNumberChecker(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;

}
console.log(primeNumberChecker(7));  
console.log(primeNumberChecker(8));  
console.log(primeNumberChecker(81)); 


//EXERCISE THREE:
function volumeArea(r, h){
const volume = (1 / 3) * Math.PI * Math.pow(r, 2) * h;
const slantHeight = Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2));
const area = Math.PI * r * (r + slantHeight);

console.log(volume.toFixed(4));
console.log(area.toFixed(4));


}
volumeArea(3,5)
volumeArea(3.3,7.8)



//EXERCISE FOUR:
function biggestOfThreeNumbers(input){
    let biggest = input[0];

    for (let i = 0; i < input.length; i++){

        if (input[i] >= biggest){
            biggest = input[i];   
        } 
    }
    console.log(biggest);
}
biggestOfThreeNumbers([-2,7,3])
biggestOfThreeNumbers([130,5,99])
biggestOfThreeNumbers([43,43.2,43.1])
biggestOfThreeNumbers([2,2,2])



//EXERCISE FIVE:
function binaryToDecimal(binaryStr){
let decimal = parseInt(binaryStr, 2);
console.log(decimal);

}
binaryToDecimal('00001001')
binaryToDecimal('11110000')


//EXERCISE SIX:
function chessBoard(n){
    let result = '<div class = "chessboard"> \n'
    
    for (let row = 0; row < n; row++){
        result += '<div> \n'

        for (let col = 0; col < n; col++){
            let colorClass = (row + col) % 2 === 0 ? 'black' : 'white';
            result += ` <span class="${colorClass}"></span>\n`;
        }

        result += ' </div>\n'
    }

    result += '</div>'
    return result;

}
console.log(chessBoard(3));


//EXERCISE SEVEN:
function triangleArea(a, b, c) {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(area);
}
triangleArea(2,3.5,4)
triangleArea(3,5.5,4)
