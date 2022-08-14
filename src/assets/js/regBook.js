document.getElementById("userName").innerHTML =
  localStorage.getItem("currentUser");

function Base64() {
  fileSelect = document.getElementById("file").files;
  if (fileSelect.length > 0) {
    var fileSelect = fileSelect[0];
    var fileReader = new FileReader();

    fileReader.onload = function (FileLoadEvent) {
      var srcData = FileLoadEvent.target.result;
      localStorage.setItem("bookImageURL", fileReader.result);

      document.getElementById("imageFile").src = srcData;
      console.log(srcData, fileSelect);
    };
    fileReader.readAsDataURL(fileSelect);
  }
}

var fileUp = document.getElementById("file");
fileUp.addEventListener("change", function () {
  Base64();
});

document.addEventListener("DOMContentLoaded", function () {
  const newBookImageURL = localStorage.getItem("bookImageURL");
  if (newBookImageURL) {
    document.querySelector("#imageFile").setAttribute("src", newBookImageURL);
  }
});

function addNewBook() {
  event.preventDefault();
  var image = localStorage.getItem("bookImageURL", "data:image/jpeg;base64,");
  var title = document.getElementById("titleContainer").value;
  var author = document.getElementById("authorContainer").value;
  var synopsis = document.getElementById("synopsisContainer").value;
  var genre = document.getElementById("genreContainer").value;
  var systemEntryDate = document.getElementById("entryContainer").value;

  var newListBooks = JSON.parse(localStorage.getItem("newListBooks") || "[]");
  newListBooks.push({
    image: image,
    title: title,
    author: author,
    synopsis: synopsis,
    genre: genre,
    systemEntryDate: systemEntryDate,
  });

  if (
    image == "" ||
    title == "" ||
    author == "" ||
    synopsis == "" ||
    genre == "" ||
    systemEntryDate == ""
  ) {
    alert("Favor preencher os espaços em branco.");
  } else {
    localStorage.setItem("newListBooks", JSON.stringify(newListBooks));

    // console.log("Salva com sucesso.");
  }
}
