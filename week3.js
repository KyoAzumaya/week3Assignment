
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

total = 0
for (let i = 0; i < names.length; i++){
    total += names[i].length;
}
var average = total / names.length;
console.log(average);

allNames = ""
for (let i = 0; i < names.length; i++){
    allNames += names[i] + " ";
}
console.log(allNames);





var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

const nameLengths = []
for (let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
const totalName = 0;
for (let i = 0; i < names.length; i++){
    totalName += names[i].length;
}
console.log(totalName);


let wordConcat = ""
function param(word, n){
    for (let i = 0; i < n; i++){
        wordConcat += word;
    }
    return wordConcat;
}
console.log(param("Hello", 3));


function name(firstName, lastName){
    return firstName + " " + lastName;
}
console.log(name('Kyo', 'Azumaya'));

let total = 0;
const argument = [56, 10, 5, 10, 25];
function number(n){
    for (let i = 0; i < n.length; i++){
        total += n[i];
    }
    if (total > 100) {
        return true;
    } else {
        return false;
    }
}
console.log(number(argument)); 

let total = 0
let average = 0
const numbers = [10, 30, 54, 30];
const numbers2 = [10, 10, 10]
function findAverage(n) {
    for (let i = 0; i < n.length; i++)
    total += n[i];
    average = total / n.length;
    return average;
}
console.log(findAverage(numbers));


function calcBmi(weight, height){
    let bmi = weight / (height * height); // weight in kg
                                          // height in m
    if (bmi < 18.5) {
        return "underweight";
    } else if (bmi < 25) {
        return "normal";
    } else if (bmi > 30) {
        return "overweight";
    } else {
        return "obese";
    }
}
console.log(calcBmi(77, 1.8));




age1 = ages[0];
age2 = ages[ages.length-1];
console.log(age1 - age2);



var ages = [3, 9, 23, 64, 2, 8, 28, 93];

ages.splice(0, 0, 29);
console.log(ages)
age1 = ages[0];
age2 = ages[ages.length-1];
console.log(age1 - age2);


let total1 = 0;
let total2 = 0;
let averageOne = 0;
let averageTwo = 0;
const arrayOne = [1, 4, 6, 9];
const arrayTwo = [2, 4, 6, 4];

function averageOfTwo(one, two) {
    for (let i = 0; i < one.length; i++) {
        total1 += one[i];
    }
    averageOne = total1 / one.length;
    
    for (let i = 0; i < two.length; i++) {
        total2 += two[i];
    }
    averageTwo = total2 / two.length;
    
    if (averageOne > averageTwo) {
        return true;   
    } else {
        return false;
    }
}
console.log(averageOfTwo(arrayOne, arrayTwo));



function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(true, 11));
console.log(willBuyDrink(true, 9));
console.log(willBuyDrink(false, 11));


