// Função anônima - Função sem nome
const showMessage = function () {
  return "Função sem nome";
};

console.log(showMessage());

// Arrow function
const greatingMenssage = (userName) => {
  // return "Greetings " + userName;
  return `Greetings + ${userName}`;
};

console.log(greatingMenssage("Jhon"));

// Callback Function: Passa uma função para outra função como Argumento
function executeFunction(regularParam, callback) {
  console.log(`Regular function execution: ${regularParam}`);
  callback();
}

function callbackFunction() {
  console.log("Another Function executing");
}

executeFunction("callback Teste", callbackFunction);

// Criando a função no proprio parâmetro
executeFunction("callback Teste 2", function () {
  console.log("Another Function executing on Params");
});

// Utilizando Arrow Function
executeFunction("callback Teste 3", () => {
  console.log("Another Function executing on Params with arrow function");
});

// Utilizando Arrow Function de uma linha
executeFunction("callback Teste 3", () =>
  console.log("Another Function executing on Params with arrow function - singles line")
);
