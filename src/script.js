/*
    WebCalculator (v1.0) - Cyril John Magayaga
    --------------------------------------------------------------------------
    GitLab: https://gitlab.com/cyrilmagayaga/webcalculator
    --------------------------------------------------------------------------
    WebCalculator is a simple web-based scientific calculator was created and
    developed by Cyril John Magayaga (GitLab: https://gitlab.com/cyrilmagayaga
    and GitHub: https://github.com/magayaga)
*/
document.addEventListener("DOMContentLoaded", function () {
    const resultField = document.getElementById("result");
  
    document.querySelectorAll(".buttons button").forEach(button => {
        button.addEventListener("click", function () {
            const buttonValue = this.textContent;
            
            if (buttonValue === "=") {
                try {
                    resultField.value = eval(resultField.value);
                } catch (error) {
                    resultField.value = "Error";
                }
            } else if (buttonValue === "C") {
                resultField.value = "";
            } else if (buttonValue === "⌫") {
                resultField.value = resultField.value.slice(0, -1);
            } else if (buttonValue === "π") {
                resultField.value += Math.PI;
            } else if (buttonValue === "√") {
                resultField.value = Math.sqrt(resultField.value);
            } else if (buttonValue === "³√") {
              resultField.value = Math.cbrt(parseFloat(resultField.value));
            } else if (buttonValue === "φ") {
                resultField.value += (1 + Math.sqrt(5)) / 2;
            } else if (buttonValue === "α") {
                resultField.value += 2.502907875;
            } else if (buttonValue === "δ") {
                resultField.value += 4.669201609;
            } else if (buttonValue === "ζ") {
                resultField.value += 1.2020569032;
            } else if (buttonValue === "γ") {
                resultField.value += 0.5772156649;
            } else if (buttonValue === "x^2") {
                resultField.value = Math.pow(resultField.value, 2);
            } else if (buttonValue === "x!") {
                resultField.value = factorial(resultField.value);
            } else if (buttonValue === "sin") {
                resultField.value = Math.sin(resultField.value);
            } else if (buttonValue === "cos") {
                resultField.value = Math.cos(resultField.value);
            } else if (buttonValue === "tan") {
                resultField.value = Math.tan(resultField.value);    
            } else if (buttonValue === "sec") {
                resultField.value = 1 / Math.cos(resultField.value);
            } else if (buttonValue === "csc") {
                resultField.value = 1 / Math.sin(resultField.value);
            } else if (buttonValue === "cot") {
                resultField.value = 1 / Math.tan(resultField.value);
            } else if (buttonValue === "in") {
                resultField.value = Math.asin(parseFloat(resultField.value));
            } else if (buttonValue === "e") {
                resultField.value += Math.E;
            } else if (buttonValue === "add") {
                resultField.value += "+";
            } else if (buttonValue === "subtract") {
                resultField.value += "-";
            } else if (buttonValue === "multiply") {
                resultField.value += "*";
            } else if (buttonValue === "divide") {
                resultField.value += "/";
            } else {
                resultField.value += buttonValue;
            }
        });
    });
  
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
  });
  
  document.getElementById("percentage").addEventListener("click", () => {
    const resultField = document.getElementById("result");
    const currentValue = parseFloat(resultField.value);
    resultField.value = (currentValue / 100).toString();
  });
  
  document.getElementById("exponential").addEventListener("click", () => {
    const resultField = document.getElementById("result");
    const currentValue = parseFloat(resultField.value);
    resultField.value = Math.pow(currentValue, 2).toString();
  });
  
  document.getElementById('dark-mode-toggle').addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  