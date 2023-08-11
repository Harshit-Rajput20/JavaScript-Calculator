let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";

input.addEventListener("input", (e) => {
  if (
    (e.data >= "a" && e.data <= "z") ||
    (e.data >= "A" && e.data <= "Z") ||
    e.data === " "
  ) {
    console.log("Blocked: " + e.data);
    input.value = input.value.slice(0, -1);
    string = input.value;
  }
});

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(input.value);
      input.value = string;
    } else {
      if (!(e.target.innerHTML === "DEL")) {
        string = string + e.target.innerHTML;
      }
      input.value = string;
    }
    if (e.target.innerHTML == "AC") {
      input.value = "";
      string = "";
    }
    if (e.target.innerHTML === "DEL") {
      string = string.slice(0, -1);
      input.value = string;
      console.log(string);
    }
  });
});
