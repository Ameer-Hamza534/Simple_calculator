let string = "";
let buttons = document.querySelectorAll(".btn");
let value = document.getElementById("value");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("#value").innerHTML = string;
    } else if (e.target.innerHTML == "Clear") {
      string = "";
      document.querySelector("#value").innerHTML = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector("#value").innerHTML = string;
    }
  });
});
