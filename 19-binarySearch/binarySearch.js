class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    let start = 0;
    let end = nums.length - 1;

    let mid = Math.floor((start + end)/2);
   
    if (nums.length == 0) {
          return false;
        }

    if (nums[mid] == target){
      return true
    }
    else if (nums[mid] < target) {
      let nums2 = nums.slice((mid+1), (end + 1 ));

      return this.binarySearch(nums2, target);
    }else if (nums[mid] > target) {
      let nums2 = nums.slice(start, mid );

      return this.binarySearch(nums2, target);
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;