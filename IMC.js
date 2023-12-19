
window.addEventListener("scroll", function () {
    var menu = document.getElementById("menu");
    if (window.scrollY > 50) {
        menu.classList.add("menu-show");
    } else {
        menu.classList.remove("menu-show");
    }
});
function calculateIMC() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var resultElement = document.getElementById("result");

    if (weight > 0 && height > 0) {
        var imc = (weight / (height * height)).toFixed(2);
        resultElement.innerHTML = "Seu IMC é: " + imc + "<br>";

        var category = "";
        if (imc < 18.5) {
            category = "Abaixo do peso";
        } else if (imc < 25) {
            category = "Peso normal";
        } else if (imc < 30) {
            category = "Sobrepeso";
        } else if (imc < 35) {
            category = "Obesidade grau 1";
        } else if (imc < 40) {
            category = "Obesidade grau 2";
        } else {
            category = "Obesidade grau 3 (obesidade mórbida)";
        }

        resultElement.innerHTML += "Categoria: " + category;
    } else {
        resultElement.innerHTML = "Os valores inseridos não são validos insire novamente.";
    }
}
