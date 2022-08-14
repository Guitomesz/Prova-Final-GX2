// Abrir Modal

function openModal(index) {
  let modal = document.getElementById(index);

  if (typeof modal == "undefined" || modal === null) return;

  modal.style.display = "Block";
  document.body.style.overflow = "hidden";
}

// Modal de Empréstimo

function openModalLend(index) {
  let modal = document.getElementById(index);

  if (typeof modal == "undefined" || modal === null) return;

  modal.style.display = "Block";
  document.body.style.overflow = "hidden";
}

// Modal de Edição de livro

function openModalEdit(index) {
  let modal = document.getElementById(index);

  if (typeof modal == "undefined" || modal === null) return;

  modal.style.display = "Block";
  document.body.style.overflow = "hidden";
}

// Modal de Histórico

function openModalInactivate(index) {
  let modal = document.getElementById(index);

  if (typeof modal == "undefined" || modal === null) return;

  modal.style.display = "Block";
  document.body.style.overflow = "hidden";
}

// Modal de Save

function openModalInactivate(index) {
  let modal = document.getElementById(index);

  if (typeof modal == "undefined" || modal === null) return;

  modal.style.display = "Block";
  document.body.style.overflow = "hidden";
}

// Fechar Modal

function closeModal(index) {
  let modal = document.getElementById(index);

  if (typeof modal == "undefined" || modal === null) return;

  modal.style.display = "none";
  document.body.style.overflow = "auto";
}
