function titleCaseEdit(title) {
  // Insert code here;
  var separateWord = title.toLowerCase().split(" ");
  for (var i = 0; i < separateWord.length; i++) {
     separateWord[i] = separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
  }
  
  console.log(separateWord.join(" "));
  return separateWord.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;