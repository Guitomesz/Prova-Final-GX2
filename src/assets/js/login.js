function enter() {
  // let token =
  //   Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2);
  // alert("Este é o seu token: " + token);
  window.location.href = "library_lobby.html";
}

function logon() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  const userLogged = localStorage.setItem("currentUser", email);
  localStorage.getItem("currentUser").value = userLogged;

  if (email == data.login[0].email && password == data.login[0].password) {
    enter();
    alert(localStorage.getItem("currentUser"));
  } else if (
    email == data.login[1].email &&
    password == data.login[1].password
  ) {
    enter();
    alert(localStorage.getItem("currentUser"));
  } else if (
    email == data.login[2].email &&
    password == data.login[2].password
  ) {
    enter();
    alert(localStorage.getItem("currentUser"));
  } else if (email == "" || password == "") {
    alert("dados errados");
  }
}

function logout() {
  if (localStorage.getItem("currentUser") !== "") {
    alert("Você saiu, " + localStorage.getItem("currentUser"));
    window.location.href = "index.html";
    localStorage.removeItem("currentUser");
  }
}

function init() {}
