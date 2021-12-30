function titleCaseEdit(title) {
  // Insert code here;
  let titleEnd = false;

  let upperCaseTitle = "fdsfsfa";

  while(!titleEnd){
  
  upperCaseTitle = upperCaseTitle + title.charAt(0);
  upperCaseTitle.toUpperCase();
  upperCaseTitle = upperCaseTitle + title.substring(1,title.indexOf(" "));    
  title = title.substring(title.indexOf(" "));

    if(title === ""){
      titleEnd = true;
    }

  }

  return upperCaseTitle;
}

// Do not edit this line;
module.exports = titleCaseEdit;