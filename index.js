let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else {
      string = string + e.target.innerHTML;
      input.value = string;
    }
    if (e.target.innerHTML == "AC") {
      input.value = "";
      string = "";
    }
    if (e.target.innerHTML == "DEL") {
      string.slice(0, -2);
      input.value = string;
      console.log(string);
    }
  });
});
