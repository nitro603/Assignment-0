function pairSum(nums, target) {
  
  if(nums.length <= 1){
    throw "ERROR: Array is Size 1 or lower";
  }

  for ( let i = 0; i < (nums.length -1) ; i++){
    for ( let j = (i + 1); j < nums.length ; j++){
      if (target == (nums[i] + nums[j])){
        return true;
      }
    }
  }

  return false;
}

// Do not edit this line;
module.exports = pairSum;