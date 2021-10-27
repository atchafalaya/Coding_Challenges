const numbers = [5, 4, 3, 2, 1]

let largest = numbers[0];
let smallest = numbers[0];

for (i = 1; i < numbers.length; i++) {

  if (numbers[i] > largest) {
    largest = numbers[i];
  } else if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
  }

 if (smallest === largest){
    console.log("Zero profit")
 }else{
  console.log(`Buy at ${smallest}`);
  console.log(`Sell at ${largest}`);
 }