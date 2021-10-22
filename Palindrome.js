//Palindrome
function Palindrome(word){
  let j = word.length - 1;
    for (let i= 0; i < word.length; i++){
        j--;
        if (word[i] !== word[j]){
            return "Not a palindrome"
        } return "Palindrome"
    }
}


console.log(Palindrome("madam"))