//loops
// for (let hello = 0; hello < 10; hello++) {
//     //  Print „hello‟ 10 times
//     console.log(`hello ${hello}`);
//   }

//sum array
// array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// sum = 0;
// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
//   console.log(sum);
// }

//for of

// for (let arrayIterater in array) {
//   console.log(arrayIterater);
// }

// const testText = "vahid"

// for (let textIterater in testText){
//     console.log(testText[textIterater].toUpperCase())
// }

// const testObject={
//     a:1,
//     b:2,
//     c:3
// }
// for(keyIterater in testObject){
//     console.log(`${testObject[keyIterater]} => ${keyIterater}`)
// }

//for of
// const names = ["vahid", "anahid", "bani", "kiana", "beni"];

// for (iterater of names) {
//   console.log(iterater);
// }

// const myName = "VaHiD";
// for (nameIterator of myName) {
//   console.log(nameIterator);
// }

//Quiz
// const benyAshaar = "In shabi ke migan shab nist, age shabe mese dishab nist";
// for (let i = 0; i < 6; i++) {
//   console.log(benyAshaar);
// }

//even number 0 to 20

// let number ;
// for ( number = 0; number < 20; number= number+ 2) {
//   console.log(number);
// }
// console.log(number)

//-----------------odd numbers--------------------
// let number ;
// for ( number = 1; number < 20; number+= 2) {
//   console.log(number);
// }

//-----------------100 to 0  numbers--------------------
// for (let number = 100; number >= 0; number--) {
//   console.log(number);
// }

//-----------------50 to 0 by 10 numbers--------------------
// for (let number = 50; number >= 0; number -= 10) {
//   console.log(number);
// }

//-----------------25 to 0 by 5 numbers--------------------
// for (let number = 25; number >= 0; number -= 5) {
//   console.log(number);
// }

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// const animals = [
//   "Aardvark",
//   "Aardwolf",
//   "African Elephant",
//   "African Tree Pangolin",
//   "Alligator",
//   "Alpaca",
//   "Anteater",
//   "Antelope",
//   "Ape(s)",
//   "Arabian Horse",
//   "Armadillo",
//   "Arthropod(s)",
//   "Asian Elephant",
//   "Aye-Aye",
//   "Baboon",
//   "Badger",
//   "Bandicoot",
//   "Bangle Tiger",
//   "Bat(s)",
//   "Bearded Dragon",
//   "Beaver",
//   "Beluga Whale",
//   "Bengal Tiger",
//   "Big-Horned Sheep",
//   "Billy Goat",
//   "Bird(s)",
//   "Bison",
//   "Black Bear",
//   "Black Footed Rhino",
//   "Black Howler Monkey",
//   "Black Rhino",
//   "Blacktip Reef Shark",
//   "Blue Shark",
//   "Blue Whale",
//   "Boar",
//   "Bob-Cat",
//   "Bonobo",
//   "Bottlenose Dolphin",
//   "Bottlenose Whale",
//   "Brown Bear",
//   "Buffalo",
//   "Bull",
//   "Bull frog",
//   "Caiman Lizard",
//   "Camel",
//   "Capuchin Monkey",
//   "Capybara",
//   "Caribou",
//   "Cat(s)",
// ];

// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i].toLowerCase());
// }

// for (let i = animals.length - 1; i >= 0; i--) {
//   console.log(i + " : " + animals[i]);
// }

// const names = ["Sirvan", "Pourya", "Alireza", "saba", "Khorzoor"];

// for (nameItrater of names) {
//   console.log(nameItrater.toUpperCase());
// }
// const airplane = [
//   ["niloofar", "kosar", "Fatemeh"],
//   ["ali", "mohsen", "Shirin"],
//   ["atena", "mahdi", "benyamin"],
//   ["bani", "mohammad", "sina"],
//   ["Amir", "Beti", "Pourya"],
// ];

// for (let i = 0; i <= airplane.length - 1; i++) {
//   console.log(`radif ${i + 1} = ${airplane[i]}`);

//   for (let j = 0; j <= airplane[i].length - 1; j++) {
//     console.log(`  sandali   ${j + 1} - ${airplane[i][j]}`);
//   }
//   for (mosafer of airplane[i]) {
//     console.log(`          ${mosafer}`);
//   }
// }
// let count = 0;
// while (count <= 10) {
//   console.log(count);
//   count++;
// }

//      infinit loop
// let password = prompt(`write the password:`);
// let step = 0;
// while (password === "APSquery123") {
//   password = prompt(`write the password again :P`);
// }
//-------------------------------------------------------
// let repeatMe = prompt(`hey, say something`);

// while (true) {
//   repeatMe = prompt(repeatMe);
//   if (repeatMe.toLowerCase() === "stop") {
//     break;
//   }
// }

// let password = prompt("1234");

// console.log(password);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   for (let j = 0; j < 4; j++) {
//     console.log(`          ${j}`);
//     if (j === 2) break;
//   }
// }

// const numbers = [1, 2, 3, 4 , 5, 6, 7, 8, 9];
// for(iterable of numbers){
//     console.log(iterable*iterable)
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let num = numbers.forEach((numbers) => console.log(numbers));

// const airplane = [
//   ["motahare", "anahid", "amirmostafa"],
//   ["maryam", "amir", "mina"],
//   ["fatemeh", "fereshte", "kian"],
//   ["kosar", "mohammad", "yousof"],
//   ["mohsen", "hoseyn ", "shaden"],
// ];
// let myFunc = airplane.forEach((param) => {

//   console.log(`Row : `);

//   param.forEach((para) => {
//     console.log(`     ${para}`);
//   });
// });

// let kiana = ["aaa", "ssss", "sss"];
// let k = kiana.filter((lenght3) => {
//   return lenght3.length > 3;
// });
// console.log(k);

//reduce

// const vahid = ["aa", "bb", "cc", "dd", "ee", "ff"];
// let v = vahid.reduce((a, b) => {
//   return `${a} : ${b}`;
// });
// console.log(v);

//some

// const vahid = ["AA", "bb", "CC", "DDD", "EE", "FF"];

// const v = vahid.every((upper) => {
//   return upper === upper.toUpperCase();
// });
// console.log(v)
