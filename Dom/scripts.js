// Estudo sobre DOM
// Document: Representa o documento HTML inteiro
// querySelector() é mais lento (interpreta CSS)
// getElementById() é mais rápido (um propósito específico)

function domBasicAccess() {
  console.log(document);
  //
  console.log(document.title);

  // Acessar um elemento pela ID (SELETOR ID)
  const guest = document.getElementById("guest-1");
  console.log(guest);
  // .dir mostra as propriedades do elemento
  console.dir(guest);

  // Acessar um elemento pela Class (SELETOR Class)
  const guestByClass = document.getElementsByClassName("guest");
  console.log(guestByClass);
  const guest1 = guestByClass.item(0);
  const guest2 = guestByClass[1];
  console.log(guest1);
  console.log(guest2);

  // Acessar um elemento pela tag <tag>
  const guestTag = document.getElementsByTagName("li");
  console.log(guestTag);
}

// Acessa o elemento pelo seletor CSS
function domQuerySelecton() {
  console.log("QUERY SELECTOR");
  const guest1 = document.querySelector("#guest-1");
  const guests = document.querySelectorAll(".guest");
  console.log(guest1);
  console.log(guests);

  // Combinadores
  document.querySelector("div > p"); // filho direto
  document.querySelector("div p"); // descendente
  document.querySelector("h1 + p"); // irmão adjacente
  document.querySelector("h1 ~ p"); // irmão geral

  // Atributos
  document.querySelector("[data-id='123']"); // atributo específico
  document.querySelector("input[type='text']"); // elemento + atributo

  // Pseudo-classes
  document.querySelector("li:first-child"); // primeiro filho
  document.querySelector("li:last-child"); // último filho
  document.querySelector("li:nth-child(2)"); // enésimo filho
  document.querySelector("p:not(.hidden)"); // negação
}

function manipularConteudoHTML() {
  // textContent Altera o valor do conteudo da tag selecionada
  const guest1 = document.querySelector("#guest-1");
  const guest1Span = document.querySelector("#guest-1 span");

  console.log(guest1);
  console.log(guest1Span);
  // guest1Span.textContent = "Guilherme"; Retorna o conteúdo visivel e oculto

  const guestTextContent = guest1.textContent; // Retorna o conteúdo visivel e oculto
  const guestInnerText = guest1.innerText; // // Retorna APENAS o conteúdo visive
  const guestInneHTML = guest1.innerHTML; // Retorna o HTML do conteúdo
  console.log(guestInnerText);
  console.log(guestInneHTML);
}

function manipularCSS() {
  const input = document.querySelector("#name");

  input.classList.add("input-error");
  input.classList.remove("input-error");

  input.classList.toggle("input-error");

  const button = document.querySelector("button");
  button.style.backgroundColor = "red";
}

manipularCSS();
