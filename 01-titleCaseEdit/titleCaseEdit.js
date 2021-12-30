function titleCaseEdit(title) {
  // Insert code here;
  let titleEnd = false;

  let upperCaseTitle = ""

  while(!titleEnd){
  
  upperCaseTitle = String.toUpper(title.charAt(0)) + title.substring(1,title.indexOf(" "));    
  title = title.substring(title.indexOf(" "));

    if(title.equals("")){
      titleEnd = true;
    }

  }

  return upperCaseTitle;
}

// Do not edit this line;
module.exports = titleCaseEdit;