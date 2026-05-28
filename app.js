const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".button");

let expression = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "C") {
      expression = "";
      screen.textContent = "";
      return;
    }

    if (value === "=") {
      try {
        expression = eval(expression).toString();
        screen.textContent = expression;
      } catch {
        screen.textContent = "Erreur";
        expression = "";
      }
      return;
    }

    expression += value;
    screen.textContent = expression;
  });
});
