const numeroSenha = document.querySelector('.parametro-senha__texto');
const botoes = document.querySelectorAll('.parametro-senha__botao');

let tamanhoSenha = 12;

// Mostra o tamanho inicial
numeroSenha.textContent = tamanhoSenha;

// Botão diminuir
botoes[0].addEventListener('click', diminuiTamanho);

// Botão aumentar
botoes[1].addEventListener('click', aumentaTamanho);

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
        numeroSenha.textContent = tamanhoSenha;
        geraSenha();
    }
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
        numeroSenha.textContent = tamanhoSenha;
        geraSenha();
    }
}