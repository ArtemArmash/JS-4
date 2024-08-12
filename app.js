let number1 = parseFloat(prompt("Введіть перше число:"));
let number2 = parseFloat(prompt("Введіть друге число:"));
const check = (number1, number2) => {
    if (number1 < number2) { return -1; }
    else if (number1 > number2) { return 1; }
    else { return 0; }
}

console.log(`Перше число ${number1}, друге ${number2}`,check(number1,number2));
console.log('\n');
//`

let N = parseInt(prompt("Введіть факторіал числа: "));
const factorial = (N) =>{
    if(N == 0){
        return 0;
    }
    if(N == 1){
        return 1;
    }
    return N * factorial(N - 1);
}
console.log(`Факторіал ${N} =`,factorial(N));
console.log('\n');

let num1 = prompt("Перша цифра");
let num2 = prompt("Друга цифра");
let num3 = prompt("Треть цифра");

let comb = parseInt(num1+num2+num3);
console.log(comb);
console.log('\n');


const calculateArea =(length, width)=> {
    if (width === undefined) {
        return length * length;
    }
    return length * width;
}

console.log(calculateArea(5, 10));  
console.log('\n');


const isPerfectNumber = (number) =>{
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}

console.log(isPerfectNumber(10)); 
