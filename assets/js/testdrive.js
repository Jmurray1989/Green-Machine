/* Option Selector For Test Drive Section */

let img = document.getElementById("image");
let text = document.getElementById("text");

/*This function allows you to change scooter types*/

function setClass(e) {
  let select = e.target;
  img.src = select.options[select.selectedIndex].value;
  text.innerHTML = select.options[select.selectedIndex].dataset.description;
  return false;
}

document.getElementById("scooterdropdown").onchange = setClass; 
/*Using the on change and set class functions enables you to change the type of scooter*/