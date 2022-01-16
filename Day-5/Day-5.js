let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
console.log(dice1);
console.log(dice2);
const roll = dice1 + dice2;
console.log(
  `roll : "You rolled a ${dice1} and a ${dice2}. they sum to ${roll} "`
);
