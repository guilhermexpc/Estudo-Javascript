function eventOnWindow() {
  let text = "teste";
  window.addEventListener("load", () => {
    console.log("Página Carregada");
  });

  addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event);

    // retorna o elemento clicado
    console.log(event.target);
    console.log(event.target.textContent);
  });

  var teste = 2;
}
