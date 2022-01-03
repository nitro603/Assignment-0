function sumOfMinimumAndMaximum(nums) {
  // Insert code here;

    return maximumNum(nums) + minimumNum(nums);
}

function minimumNum(nums){
  let minimum = nums[0];

  for(let i = 1; i < nums.length; i++){
    if(nums[i] < minimum){
      minimum = nums[i];
    }
  }

  return minimum;
}

function maximumNum(nums){
  let maximum = nums[0];

  for(let i = 1; i < nums.length; i++){
    if(nums[i] > maximum){
      maximum= nums[i];
    }
  }

  return maximum;
}
// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;