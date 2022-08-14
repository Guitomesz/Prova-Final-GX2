let originalData;
let data;

fetch("data.json")
  .then((response) => response.json())
  .then((body) => {
    originalData = body.data;
    data = { ...originalData };

    const bookList = data.books;
    const genreList = data.books.map((books) => books.genre);
    const authorList = data.books.map((books) => books.author);
    const synopsisList = data.books.map((books) => books.synopsis);
    const entryDateList = data.books.map((books) => books.systemEntryDate);

    // console.log(genreList, authorList, entryDateList, synopsisList, bookList);

    listBooks(data.books);
    listNewBooks(newListBooksParsed);

    // console.log(listNewBooks)
    init();

    localStorage.setItem("bookList", JSON.stringify(data.books.title));
  });
