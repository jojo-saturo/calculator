const display = document.getElementById("display");

function appendValue(input) {
  display.value += input;
}

function calculate() {
  display.value = "";
}

function clearDisplay() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
