// Write your code below this line.
function LuckyNumbers(input){
    let array = [];
    for(let i = 0; i < input; i++){
        array.push(Math.floor(Math.random()*10)+1);
         
}return array;
}
console.log(LuckyNumbers(6))
// comment to update for commit to main