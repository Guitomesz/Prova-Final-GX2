// nav bar menu collapse

var menuDropDown = document.getElementsByClassName("userLogOut");
var i;

for (i = 0; i < menuDropDown.length; i++) {
  menuDropDown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}