//script for toggel menu
var toggelStatus = 1;
function Menu() {
  if (toggelStatus == 1) {
    document.getElementById("navMenu").style.right = "0px";
    toggelStatus = 0;
  } else if (toggelStatus == 0) {
    document.getElementById("navMenu").style.right = "-250px";
    toggelStatus = 1;
  }
}

