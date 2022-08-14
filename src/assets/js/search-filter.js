function search(item) {
  let result = document.getElementsByClassName("book");
  for (i = 0; i < result.length; i++) {
    if (result[i].innerHTML.toLowerCase().indexOf(item) > -1) {
      result[i].style.display = "block";
    } else {
      result[i].style.display = "none";
    }
  }
}
