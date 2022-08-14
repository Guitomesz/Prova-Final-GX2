// function listNewBooks() {
//   const json = localStorage.getItem("newListBooks");
//   const newListBooksParsed = JSON.parse(json);
//   newListBooksParsed.forEach(function (book, index) {
//     newBooksDiv.innerHTML += `<div id="bookBackground">
//       <div id="booksCard" class='book' onclick="getBook(${index}), openModal('openModal')";>
//           <image src="${book.image}">
//           </image>
//           <p>${book.title}</p>
//           <p>${book.genre}</p>

//       </div>
//     </div>
//     `;
//   });
// }

document.getElementById("userName").innerHTML =
  localStorage.getItem("currentUser");

let newBooksDiv = document.getElementById("newBooksDiv");
const json = localStorage.getItem("newListBooks");
const newListBooksParsed = JSON.parse(json);

document.getElementById("newBooksDiv").innerHTML = `
<div id="bookBackground">
   <div id="booksCard" class='book' onclick="getBook(${0}), openModal('openModal')";>
       <image src="${newListBooksParsed[0].image}">
       </image>
       <p>${newListBooksParsed[0].title}</p>


   </div>
 </div>
 <div id="bookBackground">
   <div id="booksCard" class='book' onclick="getBook(${0}), openModal('openModal')";>
       <image src="${newListBooksParsed[1].image}">
       </image>
       <p>${newListBooksParsed[1].title}</p>


   </div>
 </div>
 <div id="bookBackground">
   <div id="booksCard" class='book' onclick="getBook(${0}), openModal('openModal')";>
       <image src="${newListBooksParsed[2].image}">
       </image>
       <p>${newListBooksParsed[2].title}</p>


   </div>
 </div>
 `;

let booksDiv = document.getElementById("booksDiv");
let index = "${index}";

function listBooks() {
  data.books.forEach(function (book, index) {
    booksDiv.innerHTML += `
  <div id="bookBackground">
      <div id="booksCard" class='book' onclick="getBook(${index}), openModal('openModal')"">
          <image src="${data.books[index].image}"></image>
          <p id="bookTest">${data.books[index].title}</p>

      </div>
  </div>

              <div id="openModal" class="modal">

                <div class="modal-content">

                  <div class="modal-header">
                  <button onclick="closeModal('openModal')";>
                  <image src="./src/assets/caminho 265.png"></image>
                  </button>
                  </div>

                  <div class="modal-body">

                    <image src="${data.books[index].image}">
                    </image>
                    
                    <legend>
                    <h3>${data.books[index].title}</h3>
                    <br> 
                    <strong>Sinopse</strong> 
                    <br>
                    ${data.books[index].synopsis}
                    <br>
                    <br>
                    <strong>Autor</strong>
                    <br>
                    ${data.books[index].author}
                    <br>
                    <br>
                    <strong>Gênero</strong>
                    <br>
                    ${data.books[index].genre}
                    <br>
                    <br>
                    <strong>Data de entrada</strong>
                    <br>
                    ${data.books[index].systemEntryDate}
                    <br>
                    <br>
                    </legend>
                  </div>
                  
                  <div class="modal-footer">

                      <button onclick="openModalLend('openModalLend'), closeModal('openModal');" id="lendBook-Btn" class="btn" >
                      <image src="./src/assets/auto_stories_FILL0_wght400_GRAD0_opsz48 (1).svg">
                       Emprestar
                      </image>
                      </button>

                      <button onclick="openModalEdit('openModalEdit'), closeModal('openModal');" id="editBook-Btn" class="btn">
                      Editar
                      </button>

                      <button id="inactivateBook-Btn" class="btn" onclick="openModal('openModalInactivate'), closeModal('openModal');">
                      Inativar
                      </button>

                      <button id="historicBook-Btn" class="btn" onclick="openModal('openModalHist'), closeModal('openModal'), showRentHist();">
                      Histórico
                      </button>
                      <br>




                      



                  </div>
                  
                  <div id="histAndInactivateMotive">


                      </div>
                  </div>

            </div>




            

            <div id="openModalLend" class="modal-lend">

                <div class="modal-content">

                  <div class="modal-header">
                  <button onclick="closeModal('openModalLend'),openModal('openModal')";>
                  <image src="./src/assets/caminho 265.png"></image>
                  </button>
                  </div>
                  Informe os dados do aluno antes de continuar
                  <br>
                  <br>

                  <div class="modal-body-lend">
                    
                    <form>
                        <input type="text" id="lendToName" placeholder="   Nome do Aluno"></input>
                        <input type="text" id="lendToClass" placeholder="   Turma"></input>
                        <input type="date" id="lendOnDate" placeholder="Data de retirada"></input>
                        <input type="date" id="returnOnDate" placeholder="Data de entrega"></input>
                    </form>

                  </div>
                  <br>
                  <br>
                  
                  <div class="modal-footer-lend">

                      <button id="lendBook-Btn" class="btn" onclick="lendBook(), changeMainModal(), closeModal('openModalLend'), openModal('openModal'), changeBtnLend(); ">
                      <image id="imgBookBtn" src="./src/assets/auto_stories_FILL0_wght400_GRAD0_opsz48 (1).svg">
                       Emprestar
                      </image>
                      </button>

                  </div>
                </div>
            </div>


            <div id="openModalEdit" class="modal-edit">

                <div class="modal-content-edit">

                  <div class="modal-body-edit">
                    
                    <form>
                        <image id="editedBookImage" src="${book.image}"></image>
                        <input type="text" id="editedBookTitle" placeholder="${book.title}"></input>
                        <input type="text" id="editedBookAuthor" placeholder="${book.author}"></input>
                        <input type="text" id="editedBookSynopsis" placeholder="${book.synopsis}"></input>
                        <input type="text" id="editedBookGenre" placeholder="${book.genre}"></input>
                        <input type="date" id="editedBookEntryDate" placeholder="${book.systemEntryDate}"></input>
                    </form>

                  </div>
                  <br>
                  <div class="modal-footer-edit">


                      <button id="lendBook-Btn" class="btn" onclick="openModal('openModal'), closeModal('openModalEdit'); ">
                       Cancelar
                      </button>
                      <button id="saveEdit" class="btn" onclick="closeModal('openModalEdit'), changeBookData()";>
                      Salvar
                      </button>

                  </div>
                </div>
            </div>



            <div id="openModalInactivate" class="modal">

            <div class="modal-content">

            <div class="modal-header">
              <button onclick="closeModal('openModalInactivate'),openModal('openModal')";>
                <image src="./src/assets/caminho 265.png"></image>
              </button>
            </div>

              <div class="modal-body-Inactivate">
                <form>
                    Inativar Livro                
                    <br>
                    <br>
                    <textArea id="textInactivate" placeholder="Descrição"></textArea>
                </form>

              </div>
              <div class="modal-footer-Inactivate">
                  <button id="inactivateBook-Inactivate-Btn" class="btn" onclick="openModal('openModal'), closeModal('openModalInactivate'), inactivate();">
                   Inativar
                  </button>

              </div>
            </div>
        </div> 




        <div id="openModalHist" class="modal-hist">

            <div class="modal-content-hist">

            <div class="modal-header">
              <button onclick="closeModal('openModalHist'),openModal('openModal')";>
                <image src="./src/assets/caminho 265.png"></image>
              </button>
            </div>

              <div class="modal-body-hist">
              <table id="tableFilter">

                
              </table>
              </div>

            </div>
        </div> 

 
  `;
  });
}

let bookList = document.getElementById("booksDiv");

function getBook(index) {
  localStorage.setItem("booksGiven", data.books[index].title);
  console.log(
    "Você selecionou o livro: " + data.books[index].title,
    data.books[index].image
  );
}

function showRentHist() {
  var rentHistory = JSON.parse(localStorage.getItem("rentHistory"));
  document.getElementById("tableFilter").innerHTML = `
  
  
                  <div>
                    <table>
                      <tr>
                        <th>Nome do Aluno</th>
                        <th>Turma</th>
                        <th>Data da retirada</th>
                        <th>Data da entrega</th>
                      </th>
                      <tr>
                        <th>
                          <button onclick="sortTableName();"></button>
                            <hr>
                        </th>
                        <th>
                          <button onclick="sortTableClass();"></button>
                        <hr>
                          </th>
                        <th>
                          <button onclick="sortTableLendDate()";></button>
                          <hr>
                        </th>
                        <th>
                          <button onclick="sortTableReturnDate()";></button>
                          <hr>
                        </th>
                      </tr>
                        <br>
                      <tr>
                        <td>${rentHistory[0].lendToName}</td>
                        <td>${rentHistory[0].lendToClass}</td>
                        <td>${rentHistory[0].lendOnDate}</td>
                        <td>${rentHistory[0].returnOnDate}</td>
                      </td>
                      <tr>
                        <td>${rentHistory[1].lendToName}</td>
                        <td>${rentHistory[1].lendToClass}</td>
                        <td>${rentHistory[1].lendOnDate}</td>
                        <td>${rentHistory[1].returnOnDate}</td>
                      </tr>
                      <tr>
                        <td>${rentHistory[2].lendToName}</td>
                        <td>${rentHistory[2].lendToClass}</td>
                        <td>${rentHistory[2].lendOnDate}</td>
                        <td>${rentHistory[2].returnOnDate}</td>
                      </tr>
                      <tr>
                        <td>${rentHistory[3].lendToName}</td>
                        <td>${rentHistory[3].lendToClass}</td>
                        <td>${rentHistory[3].lendOnDate}</td>
                        <td>${rentHistory[3].returnOnDate}</td>
                      </tr>
                    </table>
                  </div>
  
  `;
  localStorage.setItem("rentHistory", JSON.stringify(rentHistory));
}

function changeMainModal(name, index) {
  var rentHistory = JSON.parse(localStorage.getItem("rentHistory"));
  document.getElementById("histTable").innerHTML = `
  
  
  <div>
  <table>
  <tr>
  <th>Nome do Aluno</th>
  <th>Turma</th>
  <th>Data da retirada</th>
  <th>Data da entrega</th>
  </tr>
  <br>
  <tr>
  <td>${rentHistory[index].lendToName}</td>||
  <td>${rentHistory[index].lendToClass}</td>||
  <td>${rentHistory[index].lendOnDate}</td>||
  <td>${rentHistory[index].returnOnDate}</td>
  </tr>
  </table>
  </div>
  
  `;
  localStorage.setItem("rentHistory", JSON.stringify(rentHistory));
}

function sortBooks() {}

function changeBookData() {
  var editedBook = JSON.parse(localStorage.getItem("editedBook"));
  document.getElementById("bookTest").innerHTML = editedBook;
}

function clear() {
  booksDiv.innerHTML = "";
  newBooksDiv.innerHTML = "";
}

function init() {}
