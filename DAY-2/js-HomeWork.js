const myNumbers = 4 + (3 * 4) / 2;
console.log(myNumbers);

const myNumbers2 = (13 % 5) ** 2;
console.log(myNumbers2);

console.log(200 + 0 / 0);
//----------------------------------
let score = 5;
score + 4;
console.log(score);
//----------------------------------
let waterBoilingPoint = 100;
waterBoilingPoint /= 2;
waterBoilingPoint += 10;
console.log(waterBoilingPoint);
//----------------------------------
const myAge = 20;
// myAge++; //for reject the error just commented this line
console.log(myAge);
//----------------------------------
isLoggedIn = true;
console.log(isLoggedIn);
//----------------------------------
const myName = "Vahid Samadi";
console.log(myName[2]); //output must be "h"
console.log("My Name Lenght = " + myName.length + " charcacter");

//----------------------------------
const animal = "Magnificent Frigatebird";
console.log(animal[7]); //output must be C

//----------------------------------
const city = "Swansea";
const country = "Wales";
const comb = city + country;

console.log(comb); //output  = SwanseaWales
//----------------------------------
let year = "2000";
year + 1;
console.log(year); //output = 2000 //be dalil inke (year+1) dar variable zakhire nashode
//----------------------------------
const myName2 = "    Vahid      Samadi    ";
console.log(myName2.toUpperCase());
console.log(myName2.toLowerCase());
console.log(myName2.trim());
console.log(myName.replace("Vahid", "VaHiD"));
console.log(myName.repeat(10));

//----------------------------------
const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[5]);
console.log(words.slice("the"));

// expected output: "fox"

const chars = str.split("");
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]
//----------------------------------

//CHECK YOUR UNDERSTANDING
const skateBoard = "skateBoard";
console.log(skateBoard.replace(skateBoard, "beard"));
//---------------------------------
