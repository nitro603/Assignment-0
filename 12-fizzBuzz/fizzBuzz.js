function fizzBuzz(start, end) {
  // Insert code here;
  
  const array = [];

  for(let i = 0; start <= end; i++){

    if(!(start%3 == 0 && start%5 == 0)){

      if(start%3 == 0){
        array[i] = "Fizz";
      }else if(start%5 == 0){
        array[i] = "Buzz";
      }else{
        array[i] = start;
      }

    }else{
      array[i] = "FizzBuzz";
    }
    start++;
  }

  return array;
}

// Do not edit this line;
module.exports = fizzBuzz;