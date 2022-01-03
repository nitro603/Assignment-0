function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  var set = new Set();

  for(var arg of args){
    arg.forEach(num => set.add(num));
  }

  return set;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;