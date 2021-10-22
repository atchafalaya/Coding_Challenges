// Write your code below
const charString = ("abcdefgg")
function uniqueCheck (charString){
    for (let i =0; i < charString.length; i++ ) {
        j--
        for (let j =0; j < charString.length; j++) {
            if (charString[i] === charString[j])
            return false;
        }

    }
}
return true;
console.log(uniqueCheck(charString));