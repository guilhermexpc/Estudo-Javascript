// Estudo sobre DOM
// Document: Representa o documento HTML inteiro

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
