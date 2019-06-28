import {
    Num,
    Min,
    Sum
} from "./index"

let num1 = new Num(5);
let num2 = new Num(10);
console.log(num1);

let min = new Min(num1,num2);
console.log(min.interpret());

let sum = new Sum(num1,num2);
console.log(sum.interpret());