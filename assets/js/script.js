function updateToUnitOptions() {
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit");
    const options = toUnit.options;
    for (let i = 0; i < options.length; i++) {
        options[i].disabled = options[i].value === fromUnit;
    }
}

function convert() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    

    // Verificar se o valor de entrada é válido
    if (isNaN(inputValue) || inputValue < 0) {
        alert ("Por favor, insira um valor.");
        return;
    }

    let resultValue;
    let unitLabel;

    // Conversão básica de distância
    if (fromUnit === "meters") {
        if (toUnit === "kilometers") {
            resultValue = inputValue / 1000;
            unitLabel = "Quilômetros"; // Rótulo da unidade
        } else if (toUnit === "miles") {
            resultValue = inputValue * 0.000621371;
            unitLabel = "Milhas"; // Rótulo da unidade
        } else {
            resultValue = inputValue; // Metros para Metros
            unitLabel = "Metros"; // Rótulo da unidade
        }
    } else if (fromUnit === "kilometers") {
        if (toUnit === "meters") {
            resultValue = inputValue * 1000;
            unitLabel = "Metros"; // Rótulo da unidade
        } else if (toUnit === "miles") {
            resultValue = inputValue * 0.621371;
            unitLabel = "Milhas"; // Rótulo da unidade
        } else {
            resultValue = inputValue; // Quilômetros para Quilômetros
            unitLabel = "Quilômetros"; // Rótulo da unidade
        }
    } else if (fromUnit === "miles") {
        if (toUnit === "meters") {
            resultValue = inputValue * 1609.34; // 1 milha = 1609.34 metros
            unitLabel = "Metros"; // Rótulo da unidade
        } else if (toUnit === "kilometers") {
            resultValue = inputValue * 1.60934; // 1 milha = 1.60934 quilômetros
            unitLabel = "Quilômetros"; // Rótulo da unidade
        } else {
            resultValue = inputValue; // Milhas para Milhas
            unitLabel = "Milhas"; // Rótulo da unidade
        }
    }

    // Atualiza o campo de resultado
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Valor convertido: ${resultValue.toFixed(2)} ${unitLabel}`; // Mostra a unidade convertida

    // Animação
    resultElement.classList.remove("show");
    void resultElement.offsetWidth; // Força reflow
    resultElement.classList.add("show");
    
}
