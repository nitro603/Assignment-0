function isPalindrome(word) {
  // Insert code here;
  let stack = [];

  for(let i = 0; i < word.length; i++){
    stack.push(word.charAt(i));
  }

  for(let i = 0; i < stack.length; i++){
    if(stack.pop() != word.charAt(i)){
      return false;
    }
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;