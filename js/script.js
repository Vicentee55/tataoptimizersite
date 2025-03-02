const palavras = ["Tata Optimizer", "Aumente seu Fps", "Reduza o seu input lag"];
let i = 0;
let j = 0;
let apagando = false;
const textoDinamico = document.getElementById("titulo-dinamico");

function digitar() {
    if (!apagando && j < palavras[i].length) {
        textoDinamico.innerHTML += palavras[i][j];  // Digita a letra
        j++;
        setTimeout(digitar, 100); // Atraso entre cada caractere
    } else if (apagando && j > 0) {
        textoDinamico.innerHTML = palavras[i].substring(0, j - 1);  // Apaga a letra
        j--;
        setTimeout(digitar, 50); // Atraso entre apagar os caracteres
    } else {
        apagando = !apagando;  // Muda o estado de apagar ou digitar
        if (!apagando) {
            i = (i + 1) % palavras.length;  // Alterna entre as palavras
        }
        setTimeout(digitar, 1000);  // Atraso antes de começar a digitar a próxima palavra
    }
}

digitar();  // Inicia a digitação
