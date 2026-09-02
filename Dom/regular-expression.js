const input = document.querySelector("input");
const form = document.querySelector("form");
const regex = /\D+/g;

function regexFundamental() {
  input.addEventListener("input", () => {
    // console.log(input.value);
    const value = input.value;

    // console.log(value.match(regex));
    const isValid = regex.test(value);
    console.log(isValid);
  });
}

function regexManipulation() {
  form.onsubmit = (event) => {
    event.preventDefault();
    const value = input.value;
    const valueRegex = input.value.replace(regex, "");
    console.log(value);
    console.log(valueRegex);

    console.log(`Input Value [${input.value}] - Input with Regex [${value.replace(regex, "X")}]`);
    const isValid = regex.test(value);
    console.log(isValid);
  };
}

regexFundamental();
regexManipulation();
