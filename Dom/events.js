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

function eventoElementoEspecifico() {
  const ul = document.querySelector("ul");
  const button = document.querySelector("button");

  console.log();
  ul.addEventListener("scroll", (event) => {
    console.log(ul.scrollTop);

    if (ul.scrollTop >= 310) {
      console.log("Fim da lista");
      ul.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  });

  button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("clicou no botão");
  });
}

function eventoFormulario() {
  const form = document.querySelector("form");

  form.onsubmit = (event) => {
    event.preventDefault();
    console.log("Submit no formulário acionado");
  };
}

function eventoInput() {
  const input = document.querySelector("input");
  // keydown - Quando a tecla é precionada;
  // input.addEventListener("keydown", (event) => {
  //   console.log(event.key);
  // });

  // keypress - Quando a tecla de CARACTER é precionada;
  input.addEventListener("keypress", (event) => {
    console.log(event.key);
  });

  function inputChange() {
    console.log("Input Alterado");
  }

  input.onchange = () => inputChange();
}

eventoInput();
