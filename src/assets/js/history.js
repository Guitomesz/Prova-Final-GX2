document.getElementById("userName").innerHTML =
  localStorage.getItem("currentUser");

let histTable = document.getElementById("tableFilterPage");
var rentHistory = JSON.parse(localStorage.getItem("rentHistory"));
var givenBook = localStorage.getItem("booksGiven");
console.log(givenBook);

document.getElementById("tableFilterPage").innerHTML = `
                    <div id="table-names-background">
                        <ul id="table-names">
                            <li>Aluno</li>
                            <li>Turma</li>
                            <li>Livro</li>
                            <li>Data da Retirada</li>
                            <li>Data da Entrega</li>
                        </ul>
                    </div>
                            <br>
                    <div>
                        <ul id="table-names">
                            <li>
                            <button onclick="sortTableName();">
                            </button>
                            </li> 
                            <li>
                            <button onclick="sortTableClass();">
                            </button>
                            </li>
                            <li>
                            <button onclick="sortTableTitle();">
                            </button>
                            </li>
                            <li>
                            <button onclick="sortTableTaken();">
                            </button>
                            </li>
                            <li>
                            <button onclick="sortTableGiven();">
                            </button>
                            </li>
                        </ul>
                            <hr>
                    </div>
                    <div>
                        <ul id="table-names">
                            <li>
                            ${rentHistory[0].lendToName}
                            </li> 
                            <li>
                            ${rentHistory[0].lendToClass}
                            </li>
                            <li>
                            ${givenBook}
                            </li>
                            <li>
                            ${rentHistory[0].lendOnDate}
                            </li>
                            <li>
                            ${rentHistory[0].returnOnDate}
                            </li>
                        </ul>
                            <hr>
                    </div>
                    <div>
                        <ul id="table-names">
                            <li>
                            ${rentHistory[1].lendToName}
                            </li> 
                            <li>
                            ${rentHistory[1].lendToClass}
                            </li>
                            <li>
                            ${givenBook}
                            </li>
                            <li>
                            ${rentHistory[1].lendOnDate}
                            </li>
                            <li>
                            ${rentHistory[1].returnOnDate}
                            </li>
                        </ul>
                            <hr>
                    </div>
                    <div>
                        <ul id="table-names">
                            <li>
                            ${rentHistory[2].lendToName}
                            </li> 
                            <li>
                            ${rentHistory[2].lendToClass}
                            </li>
                            <li>
                            ${givenBook}
                            </li>
                            <li>
                            ${rentHistory[2].lendOnDate}
                            </li>
                            <li>
                            ${rentHistory[2].returnOnDate}
                            </li>
                        </ul>
                            <hr>
                    </div>
                    <div>
                        <ul id="table-names">
                            <li>
                            ${rentHistory[3].lendToName}
                            </li> 
                            <li>
                            ${rentHistory[3].lendToClass}
                            </li>
                            <li>
                            ${givenBook}
                            </li>
                            <li>
                            ${rentHistory[3].lendOnDate}
                            </li>
                            <li>
                            ${rentHistory[3].returnOnDate}
                            </li>
                        </ul>
                            <hr id="bottomTable">
                    </div>
   `;
function clear() {
  booksDiv.innerHTML = "";
}

function init() {
  historyTable(data.rentHistory);
}
{
  /* <div id="tableMain">
                        <tr class="tableTitles">
                            <th>Aluno</th>
                            <th>Turma</th>
                            <th>Livro</th>
                            <th>Data da Retirada</th>
                            <th>Data da Entrega</th>
                        </tr>
                        
                        <tr id="tableBtns">
                            <th><button onclick="sortTableName();"></button>
                                <hr>
                            </th>

                            <th><button sortTableClass();></button>
                                <hr>
                            </th>

                            <th><button sortTitle();></button>
                                <hr>
                            </th>

                            <th><button sortTableLendDate();></button>
                                <hr>
                            </th>

                            <th><button sortTableReturnDate();></button>
                                <hr>
                            </th>
                        </tr>
                    <div class="data-table">
                        <tr>
                            <td id="name">
                            ${rentHistory[0].lendToName}
                            <hr>
                            </td>

                            <td>
                            ${rentHistory[0].lendToClass}
                                <hr>
                            </td>
                            <td>
                            ${givenBook}
                            <hr>
                            </td>

                            <td><input disabled="disabled" type="text" placeholder="${rentHistory[0].lendOnDate}" style="border: none; text-indent: 1.5rem;"></input>
                                <hr>
                            </td>

                            <td><input disabled="disabled" type="text" placeholder="${rentHistory[0].lendOnDate}" style="border: none; text-indent: 1.5rem;"></input>
                                <hr>
                            </td>

                        </tr>

                        <tr>
                            <td id="name">
                            ${rentHistory[1].lendToName}

                                <hr>
                            </td>

                            <td>
                            ${rentHistory[1].lendToClass}

                                <hr>
                            </td>

                            <td>
                            ${givenBook}
                            
                                <hr>
                            </td>

                            <td><input disabled="disabled" type="text" placeholder="${rentHistory[1].lendOnDate}" style="border: none; text-indent: 1.5rem;"></input>
                                <hr>
                            </td>

                            <td><input disabled="disabled" type="text" placeholder="${rentHistory[1].lendOnDate}" style="border: none; text-indent: 1.5rem;"></input>
                                <hr>
                            </td>

                        </tr>

                        <tr>
                            <td id="name">
                            ${rentHistory[2].lendToName}

                                <hr>
                            </td>

                            <td>
                            ${rentHistory[2].lendToClass}

                                <hr>
                            </td>

                            <td>
                            ${givenBook}
                            
                                <hr>
                            </td>

                            <td><input disabled="disabled" type="text" placeholder="${rentHistory[2].lendOnDate}" style="border: none; text-indent: 1.5rem;"></input>
                                <hr>
                            </td>

                            <td><input disabled="disabled" type="text" placeholder="${rentHistory[2].lendOnDate}" style="border: none; text-indent: 1.5rem;"></input>
                                <hr>
                            </td>
                        </tr>

                        <tr>
                            <td>
                            ${rentHistory[3].lendToName}

                                <hr>
                            </td>

                            <td>
                            ${rentHistory[3].lendToClass}

                                <hr>
                            </td>

                            <td>
                            ${givenBook}
                            
                                <hr>
                            </td>

                            <td><input disabled="disabled" type="text" placeholder="${rentHistory[3].lendOnDate}" style="border: none; text-indent: 1.5rem;"></input>
                                <hr>
                            </td>

                            <td><input disabled="disabled" type="text" placeholder="${rentHistory[3].lendOnDate}" style="border: none; text-indent: 1.5rem;"></input>
                                <hr>
                            </td>

                        </tr>
                    </div>
                    </table>
                 </div> */
}
